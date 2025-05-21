import mongoose from "mongoose";
const { Schema, model } = mongoose;

const project = new Schema({
    name: String,
    wordCountGoal: Number,
    startDate: Date,
    endDate: Date,
    genre: String,
    dateAdded: Date,
    dateUpdated: Date
});

const Project = model("Project", project);
export default Project;