import Cache from "@models/Cache";
const getCache = async (key) => {
  return Cache.findOne({ key });
};

const createCache = async (key, data) => {
  const cacheTotal = await Cache.find({});
  const objectToBeSaved = {
    key,
    data,
    createdAt: Date.now(),
  };
  // if the cache are having more than 5 entries, I replace the first one with the latest value added
  if (cacheTotal.length < 5) {
    return Cache.create(objectToBeSaved);
  }
  return Cache.findOneAndUpdate({}, objectToBeSaved, {
    sort: { createdAt: 1 },
    new: true,
  });
};

const getAll = async () => Cache.find({}).select("key");

export default {
  createCache,
  getCache,
  getAll,
};
