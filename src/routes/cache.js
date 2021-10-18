import express from "express";
import cacheController from "@controllers/cache";

const router = express.Router();
router.get("/cache", cacheController.getOrCreate);

export default router;
