import mongoose from "mongoose";

const SourceIPMapSchema = new mongoose.Schema(
    {
        alert:{
            rev: Number,
            severity: Number
        },
        src_ip: String,
        proto: String,
    },
  { timestamps: true}
);

const SourceIPMap = mongoose.model("SourceIPMap", SourceIPMapSchema);
export default SourceIPMap;