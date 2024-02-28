import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});


