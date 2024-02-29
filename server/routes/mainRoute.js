import express from "express";

const router = express.Router();

router.get("/*", (_req, res) => {
    res.render("../../client/views/index.html.ejs");
});

export default router;