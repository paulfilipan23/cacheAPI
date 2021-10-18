import cacheService from "@services/cache";

const getOrCreate = async (req, res) => {
  const { key } = req.query;
  const result = await cacheService.getOrCreate(key);
  return res.status(200).json(result);
};

export default { getOrCreate };
