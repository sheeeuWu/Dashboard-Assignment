import mongoose from "mongoose";

const AlertTrendSchema = new mongoose.Schema(
    {
        alert:{
            rev: Number,
            severity: Number
        },
        proto: String,
        timestamp: String,
    },
  { timestamps: true}
  
);

const AlertTrend = mongoose.model("AlertTrend", AlertTrendSchema );
export default AlertTrend;