import mongoose from "mongoose";

const BreakdownSchema = new mongoose.Schema(
    {
        alert:{
            rev: Number,
            severity: Number,
            category: String,
        },
        proto: String,
    },
  { timestamps: true}
);

const Breakdown = mongoose.model("Breakdown", BreakdownSchema);
export default Breakdown;