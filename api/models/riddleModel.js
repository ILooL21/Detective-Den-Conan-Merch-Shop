import mongoose from "mongoose";

const riddleSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    kronologi: {
      type: String,
      required: true,
    },
    tersangka: {
      type: Array,
      default: [],
    },
    clue: {
      type: String,
      default: "",
    },
    answer: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Riddle = mongoose.model("Riddle", riddleSchema);
export default Riddle;
