import express, { Router } from "express";
import { getWeatherController } from "../controllers/weather.controller";

const router: Router = express.Router();

router.get("/:city", getWeatherController);

export default router;
