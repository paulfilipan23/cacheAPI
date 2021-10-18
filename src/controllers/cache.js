import cacheService from "@services/cache";

const getOrCreate = async (req, res) => {
  const { key } = req.query;
  const { data } = await cacheService.getOrCreate(key);
  return res.status(200).json(data);
};

const getAll = async (_, res) => {
  const result = await cacheService.getAll();
  return res.status(200).json(result);
};

const createCache = async (req, res) => {
  const { key, data } = req.body;
  const result = await cacheService.createOrUpdateCache(key, data);
  return res.status(200).json(result);
};

export default { getOrCreate, getAll, createCache };
