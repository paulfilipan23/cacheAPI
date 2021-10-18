import express from "express";
import cache from "./cache";

const router = express.Router();

const version = "v1";
router.use(`/${version}`, cache);

export default router;
