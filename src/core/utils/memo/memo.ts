type CacheType = { [key: string]: any };

const memo = (fn: Function): Function => {
  const cache: CacheType = {};
  return (...args: any[]): any => {
    const key: string = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

export default memo;
