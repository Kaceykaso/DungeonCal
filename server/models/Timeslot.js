import mongoose, { Schema, model } from "mongoose";
//import Player from "./Player.js";

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

const TimeslotSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    slots: [{
        start: { type: Date, required: true },
        end: { type: Date, required: true },
        players: [ PlayerSchema ],
        preferred: [ PlayerSchema ]
    }]
});

const Timeslot = model('Timeslot', TimeslotSchema);

export default Timeslot;