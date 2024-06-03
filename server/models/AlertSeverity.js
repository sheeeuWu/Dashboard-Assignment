import mongoose from "mongoose";

const AlertSeveritySchema = new mongoose.Schema(
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

const AlertSeverity = mongoose.model("AlertSeverity", AlertSeveritySchema);
export default AlertSeverity;