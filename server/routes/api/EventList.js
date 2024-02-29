import { Router } from "express";
import Event from "../../models/Event.js";

const router = Router();

router.route("/")
    // Get all the events
    .get(async (_req, res) => {
        try {
            const eventList = await Event.find();
            if (!eventList) throw new Error("Sorry Boo, no events found.");
            res.status(200).json(eventList);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
    // Create a new event and save to db
    .post(async (req, res) => {
        const newEvent = new Event(req.body);
        try {
            const event = await newEvent.save();
            if (!event) throw new Error("Oh no, something went wrong saving the new event!");
            res.status(200).json(todo);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

router.route("/:id")
    // Update an existing event with the given id
    .put(async (req, res) => {
        const { id } = req.params;
        try {
            const updated = await Event.findByIdAndUpdate(id, { ...req.body });
            if (!updated) throw Error("Oh no, something went wrong updating the event!");
            res.status(200).json(updated);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
    // Delete the event with the given id
    .delete(async (req, res) => {
        const  { id } = req.params;
        try {
            const removed = await Event.findByIdAndDelete(id);
            if (!removed) throw Error("Oh no, something went wrong deleting the event!");
            res.status(200).json(removed);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
    // Get the event with the given id
    .get(async (req, res) => {
        const { id } = req.params;
        try {
            const event = await Event.findById(id);
            if (!event) throw new Error("Sorry Boo, no event found matching that description.");
            res.status(200).json(event);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    export default router;