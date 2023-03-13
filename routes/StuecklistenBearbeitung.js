//const { request } = require("express");
const express = require("express");
const router = express.Router();
const StuecklistenBearbeitung = require("../models/StuecklistenBearbeitung");

router.get("/", async (req, res) => {
  try {
    const results = await StuecklistenBearbeitung.findAll();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
