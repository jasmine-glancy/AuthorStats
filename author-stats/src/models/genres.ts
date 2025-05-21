import mongoose from "mongoose";
const { Schema, model } = mongoose;

const genre = new Schema({
    genreName: String,
    generalWordGoal: Number
});

const Genre = model("Genre", genre);
export default Genre;