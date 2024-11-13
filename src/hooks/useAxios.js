import { useEffect, useRef, useState } from "react";

import { createCacheKey, getCache, setCache } from "../lib/utils";

const useAxios = (configObj) => {
  const {
    axiosInstance,
    method,
    url,
    requestConfig = {},
    fetchOnMount = false,
    cacheExpiry = 10 * 60 * 1000, // Cache expiration time (10 minutes by default)
  } = configObj;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const controllerRef = useRef(new AbortController());

  const fetchData = async () => {
    // First, try to get data from cache
    const cacheKey = createCacheKey(method, url);

    const cachedData = getCache(cacheKey, cacheExpiry);
    if (cachedData) {
      setResponse(cachedData);
      setLoading(false);
      return; // If we have cached data, skip the API call
    }

    // If no cached data, proceed with the API call
    try {
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: controllerRef.current.signal,
      });

      // Set the response data in state and cache it
      setResponse(res.data);
      setCache(cacheKey, res.data); // Cache the data with the provided cacheKey
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fetchOnMount) {
      fetchData();
    }

    return () => controllerRef.current.abort();
  }, []);

  return [response, error, loading, fetchData];
};

export default useAxios;
