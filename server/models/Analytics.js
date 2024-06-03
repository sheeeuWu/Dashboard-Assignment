import mongoose from "mongoose";

const AnalyticsSchema = new mongoose.Schema(
  {
    alert:{
        rev: Number,
        signature: String,
        category: String,
        severity: Number
    },
    proto: String,
    src_port: Number,
    dest_port: Number,
    flow_id: Number,
    timestamp: String,
  },
  { timestamps: true}
  
);

const Analytics = mongoose.model("Analytics", AnalyticsSchema);
export default Analytics;

