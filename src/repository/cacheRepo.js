import Cache from "@models/Cache";
const getCache = async (key) => {
  return Cache.findOneAndUpdate(
    { key },
    { createdAt: Date.now() },
    { new: true }
  );
};

const createCache = async (key, data) => {
  const cacheTotal = await Cache.find({});
  const objectToBeSaved = {
    key,
    data,
    createdAt: Date.now(),
  };
  if (cacheTotal.length < 5) {
    return Cache.findOneAndUpdate({ key }, objectToBeSaved, {
      upsert: true,
      new: true,
    });
  }
  // if the cache is having more than 5 entries, I replace the first one with the latest value added
  // if key already exists, just update the new data, for being reusable on post request,
  // to not add a new entry if there are more then 5 entries
  if (await Cache.findOne({ key })) {
    return Cache.findOneAndUpdate(
      { key },
      { key, data, createdAt: Date.now() },
      { new: true }
    );
  }
  return Cache.findOneAndUpdate({}, objectToBeSaved, {
    sort: { createdAt: 1 },
    new: true,
  });
};

const getAll = async () => {
  await Cache.updateMany({}, { createdAt: Date.now() });
  return Cache.find({}).select("key");
};

const deleteOne = async (key) => Cache.deleteOne({ key });

const deleteAll = async () => Cache.deleteMany({});

export default {
  createCache,
  getCache,
  getAll,
  deleteOne,
  deleteAll,
};
