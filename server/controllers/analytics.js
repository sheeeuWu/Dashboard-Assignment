import Analytics from "../models/Analytics.js";

/* Analytics */
export const getAnalytics = async (req,res) => {
    try{
        const analytics = await Analytics.find();

        res.status(200).json(analytics);

    }catch(error){
        res.status(404).json({ message: error.message })
    }
};


