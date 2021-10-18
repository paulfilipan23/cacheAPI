import express from "express";
import cacheController from "@controllers/cache";

const router = express.Router();
router.get("/cache", cacheController.getOrCreate);
router.get("/cache-all", cacheController.getAll);

export default router;
