import User from "../models/User.js";
import OverallStat from "../models/OverallStat.js";


export const getUser = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);

    }catch(error){
        res.status(404).json({ message: error.message })
    }
};

/* Dashboard Stats */
export const getDashboardStats = async (req, res) => {
    try {
        // Fetching overall statistics
        const overallStat = await OverallStat.find();

        // Initializing sets to keep track of unique values
        let srcIpSet = new Set();
        let destIpSet = new Set();
        let protoSet = new Set();
        let alertCategorySet = new Set();

        // Iterating over each stat to populate sets and count alert categories
        overallStat.forEach(stat => {
            srcIpSet.add(stat.src_ip);
            destIpSet.add(stat.dest_ip);
            protoSet.add(stat.proto);

            if (stat.alert && stat.alert.category) {
                alertCategorySet.add(stat.alert.category);
            }
        });

        // Preparing the response object
        const dashboardStats = {
            overallStat,
            totalSrcIp: srcIpSet.size,
            totalDestIp: destIpSet.size,
            totalProto: protoSet.size,
            totalAlertCategories: alertCategorySet.size
        };

        // Sending the response
        res.status(200).json(dashboardStats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};