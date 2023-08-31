import React, { useState, useEffect, useCallback } from "react";
import API from "../apis/API";
import { SearchResponseItem } from "../Main";
import useDebounce from "./useDebounce";
import useExpiryCache from "./useExpiryCache";
import { ONE_HOUR } from "../utils/constants";

interface UserSearchProps {
  searchKeyword: string;
  debounceDelay: number;
}

const useSearch = ({ searchKeyword, debounceDelay }: UserSearchProps) => {
  const [searchResponse, setSearchResponse] = useState<SearchResponseItem[]>(
    []
  );
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(searchKeyword, debounceDelay);
  const { addItem, getItem } = useExpiryCache();

  const checkCacheAndResponse = async (searchKeyword: string) => {
    const cache = getItem(searchKeyword);
    if (cache) {
      setSearchResponse(cache);
      setIsSearching(false);
      return true;
    }
    return false;
  };

  const handleSearch = useCallback(
    async (searchKeyword: string) => {
      if (searchKeyword.trim() !== "") {
        const isCached = checkCacheAndResponse(searchKeyword);
        if (!(await isCached)) {
          setIsSearching(true);
          const response = await API(searchKeyword);
          setSearchResponse(response);
          addItem(searchKeyword, response, ONE_HOUR);
          setIsSearching(false);
        }
      }
    },
    [checkCacheAndResponse, API, addItem]
  );

  const getSearchData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await handleSearch(searchKeyword);

    const recentSearch = JSON.parse(
      localStorage.getItem("recentSearch") || "[]"
    );
    recentSearch.push(searchKeyword);
    localStorage.setItem("recentSearch", JSON.stringify(recentSearch));

    addItem(searchKeyword, searchResponse, ONE_HOUR);
  };

  useEffect(() => {
    const isNotEmpty = debouncedSearchTerm.trim() !== "";
    isNotEmpty && handleSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, handleSearch]);

  return { searchResponse, isSearching, handleSearch, getSearchData };
};

export default useSearch;
