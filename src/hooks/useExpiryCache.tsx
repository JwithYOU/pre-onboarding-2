import React, { useState } from "react";

interface CacheItem {
  key: string;
  value: any;
  expiryTime: number;
}

const useExpiryCache = (initialCache: CacheItem[] = []) => {
  const [cache, setCache] = useState<CacheItem[]>(initialCache);

  const addItem = (key: string, value: any, expiryTime: number) => {
    const newItem: CacheItem = {
      key,
      value,
      expiryTime: Date.now() + expiryTime,
    };
    setCache((prevCache) => [...prevCache, newItem]);

    setTimeout(() => {
      setCache((prevCache) => prevCache.filter((item) => item !== newItem));
    }, expiryTime);
  };

  const getItem = (key: string) => {
    const foundItem = cache.find((c) => c.key === key);
    return foundItem ? foundItem.value : null;
  };

  return { addItem, getItem };
};

export default useExpiryCache;
