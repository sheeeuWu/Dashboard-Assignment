import AlertSeverity from "../models/AlertSeverity.js";
import Breakdown from "../models/Breakdown.js";
import AlertTrend from "../models/AlertTrend.js";
import SourceIPMap from "../models/SourceIPMap.js";


/* AlertSeverity */
export const getAlertSeverity = async (req,res) => {
    try{
        const alertSeverity = await AlertSeverity.find();

        res.status(200).json(alertSeverity);

    }catch(error){
        res.status(404).json({ message: error.message })
    }
}

/* AlertTrend */
export const getAlertTrend = async (req,res) => {
    try{
        const alertTrend = await AlertTrend.find();

        res.status(200).json(alertTrend);

    }catch(error){
        res.status(404).json({ message: error.message })
    }
}

/* SourceIPMap */
export const getSourceIPMap = async (req,res) => {
    try{
        const sourceIPMap  = await SourceIPMap.find();

        res.status(200).json(sourceIPMap);

    }catch(error){
        res.status(404).json({ message: error.message })
    }
}

/* Breakdown */
export const getBreakdown = async (req,res) => {
    try{
        const breakdown = await Breakdown.find();

        res.status(200).json(breakdown);

    }catch(error){
        res.status(404).json({ message: error.message })
    }
}


