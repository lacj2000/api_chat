import mongoose from "mongoose";

const schema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})


export default mongoose.model("Message", schema);