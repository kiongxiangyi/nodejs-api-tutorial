//const { request } = require("express");
const express = require("express");
const router = express.Router();
const Bauteile = require("../models/Bauteile");

router.get("/", async (req, res) => {
  try {
    const results = await Bauteile.findAll();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
