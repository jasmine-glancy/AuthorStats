// External dependencies
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Class Implementation
const statsSchema = new Schema({
    id: ObjectId,
    name: String,
    image: String,
    alt: String,
    info: String
});

const Stats = model("Stats", statsSchema);
export default Stats;
