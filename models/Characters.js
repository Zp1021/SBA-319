import mongoose from "mongoose";

const Schema = mongoose.Schema

const charSchema = new Schema({
    charFirstName: {
        type: String,
        required: true,
    },
    charCodeName: {
        type: String,
        required: true,
        unique: true
    },
    charLastName: {
        type: String,
        required: true,
        unique: true
    }
})

let Characters = mongoose.model("Characters", charSchema)
export default Characters