import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

// Class Implementation
const authorSchema = new Schema({
    username: String,
    avatar: String,
    password: String,
    accountCreated: Date,
    accountUpdated: Date,
    projects: [{ type: Types.ObjectId, ref: "Project"}],
    progressUpdates: [{ type: Types.ObjectId, ref: "ProgressUpdate"}]
});

const Author = model("Author", authorSchema);
export default Author;