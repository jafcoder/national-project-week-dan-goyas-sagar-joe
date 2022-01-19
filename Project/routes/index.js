import express from "express";
import { getContent } from "../models/index.js";

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/:topic/:subject", async function (req, res) {
  let subject = req.params.subject;
  let topic = req.params.topic;
  console.log(subject);
  const data = await getContent(subject, topic);
  res.json({ success: true, payload: data });
});

// router.get("/api/:topic", async function (req, res) {
//   let topic = req.params.topic;
//   const data = await getVideo(topic);
//   res.json({ success: true, payload: data });
// });

export default router;
