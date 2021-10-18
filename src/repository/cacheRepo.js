import Cache from "@models/Cache";
const getCache = async (key) => {
  return Cache.findOne({ key });
};

const createCache = async (key, data) => {
  return Cache.create({
    key,
    data,
    createdAt: Date.now(),
  });
};

export default {
  createCache,
  getCache,
};
