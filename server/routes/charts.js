import express  from "express";
import { 
    getAlertSeverity,
    getBreakdown,
    getAlertTrend,
    getSourceIPMap,
} from "../controllers/charts.js"

const router = express.Router();

router.get("/alertSeverity", getAlertSeverity)
router.get("/breakdown", getBreakdown)
router.get("/alertTrend", getAlertTrend)
router.get("/sourceIpMap", getSourceIPMap)

export default router;