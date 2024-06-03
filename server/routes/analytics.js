import express from "express";
import { 
    getAnalytics,
}  from "../controllers/analytics.js"

const router = express.Router();

router.get("/analytics", getAnalytics);

export default router;