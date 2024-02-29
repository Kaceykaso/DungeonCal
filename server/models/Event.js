import mongoose, { Schema, model } from "mongoose";
//import Timeslot from "./Timeslot.js";
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

const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    timeslots: [{
        type: TimeslotSchema,
        required: true
    }],
    players: [ PlayerSchema ]
});

const Event = model("Event", EventSchema);

export default Event;


