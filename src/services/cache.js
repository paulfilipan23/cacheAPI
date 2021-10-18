import cacheRepo from "@repository/cacheRepo";
import randomGenerate from "@utils/generate-string";
import logger from "@utils/logger";

const getOrCreate = async (key) => {
  const one = await cacheRepo.getCache(key);
  if (one) {
    logger.log("info", `Cache hit`);
    return one;
  }
  logger.log("info", `Cache miss`);
  return cacheRepo.createCache(key, randomGenerate.createValue(10));
};

const getAll = async () => {
  const cacheAll = await cacheRepo.getAll();
  return cacheAll.map((cache) => cache.key);
};

const createOrUpdateCache = async (key, data) => {
  return cacheRepo.createCache(key, data);
};

export default { getOrCreate, getAll, createOrUpdateCache };
