import express from "express";
import { getContentBySubject } from "../models/index.js";

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/:subject", async function (req, res) {
  let subject = req.params.subject;
  console.log(subject);
  const data = await getContentBySubject(subject);
  res.json({ success: true, payload: data });
});
export default router;
