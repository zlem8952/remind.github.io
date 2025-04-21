const cache = new Map();

export const cacheManager = {
  get(key) {
    const entry = cache.get(key);
    if (entry && entry.expires > Date.now()) return entry.data;
    cache.delete(key);
    return null;
  },

  set(key, data, ttl = 60000) {
    cache.set(key, {
      data,
      expires: Date.now() + ttl
    });
  }
};

