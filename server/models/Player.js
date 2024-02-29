import mongoose, { Schema, model } from "mongoose";

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Player = model('Player', PlayerSchema);

export default Player;
