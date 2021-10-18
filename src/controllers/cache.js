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

const deleteOneKey = async (req, res) => {
  const { key } = req.params;
  const { deletedCount } = await cacheService.deleteOneKey(key);
  if (deletedCount) {
    return res.status(200).json({ message: `${key} was deleted` });
  }
  return res.status(404).json({ message: `${key} was not found` });
};

const deleteAll = async (_, res) => {
  const { deletedCount } = await cacheService.deleteAll();
  return res.status(200).json({ message: `${deletedCount} were deleted` });
};

export default { getOrCreate, getAll, createCache, deleteOneKey, deleteAll };
