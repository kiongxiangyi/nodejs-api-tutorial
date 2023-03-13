//const { request } = require("express");
const express = require("express");
const router = express.Router();
const Stuecklisten = require("../models/Stuecklisten");

router.get("/", async (req, res) => {
  try {
    const results = await Stuecklisten.findAll();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
