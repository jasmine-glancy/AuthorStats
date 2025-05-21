import mongoose from "mongoose";
const { Schema, model } = mongoose;

const progressUpdates = new Schema({
    date: Date,
    wordCount: Number
});

const ProgressUpdate = model("ProgressUpdate", progressUpdates);
export default ProgressUpdate;