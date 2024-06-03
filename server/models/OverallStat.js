import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
    {
        alert:{
            category: String,
        },
        src_ip: String,
        dest_ip: String,
        proto: String,
    },
  { timestamps: true}
  
);

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;