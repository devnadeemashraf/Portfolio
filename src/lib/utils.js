const createCacheKey = (method, url) => {
  return `${method.toLowerCase()}/${url}`;
};

const getCache = (key, expiryTime) => {
  const cachedData = localStorage.getItem(key);
  if (!cachedData) return null;

  const { data, timestamp } = JSON.parse(cachedData);

  // Check if the cached data has expired
  if (Date.now() - timestamp > expiryTime) {
    localStorage.removeItem(key); // Remove expired cache
    return null; // Return null if cache expired
  }

  return data;
};

const setCache = (key, data) => {
  const cacheData = {
    data,
    timestamp: Date.now(), // Store the current timestamp
  };
  localStorage.setItem(key, JSON.stringify(cacheData));
};

/**

 * @param {*} from - From the Year you want to calculate
 * @returns Time Elapsed in number of years
 */
const getTimeElapsedInYears = (from) => {
  if (typeof from != "number") {
    throw new Error("Invalid 'from' type. Expected 'number'");
  }

  return new Date().getFullYear() - from;
};

export { createCacheKey, getCache, setCache, getTimeElapsedInYears };
