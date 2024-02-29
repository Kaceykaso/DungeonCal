import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
// routes
import assetsRouter from "./routes/assetsRouter.js";
import MainRoute from "./routes/mainRoute.js";
import EventListRoutes from "./routes/api/EventList.js";

const app = express();
dotenv.config();

const publicPath = path.join(path.resolve(), "../client/public");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect dat DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB database connected..."))
    .catch((err) => console.log(`Caught an error: ${err}`));

// Create routes
app.use("/src", assetsRouter);
app.use("/", express.static(publicPath));
app.use(MainRoute);
app.use("/api/eventList", EventListRoutes);


app.listen(process.env.PORT, () => {
    console.log(`App is running on http://localhost:${process.env.PORT}`);
});


