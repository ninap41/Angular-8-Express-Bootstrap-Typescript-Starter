import { Router } from "express";
import * as api from "./data.api";
const router: Router = Router();

/**
 * Get All World Data
 */
router.get("/", api.getWorldData);
router.get("/more", api.getMoreData);

export const dataRoutes: Router = router;
