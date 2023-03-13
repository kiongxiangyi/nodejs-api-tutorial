//const { request } = require("express");
const express = require("express");
const router = express.Router();
const StuecklistenBearbeitung = require("../models/StuecklistenBearbeitung");

router.get("/", async (req, res) => {
  try {
    const {
      body: { TNummer, Werkstoff, Pattern },
    } = req;

    const results = await StuecklistenBearbeitung.findAll({
      where: {
        Stueckliste: TNummer,
        Werkstoff: Werkstoff,
        Krit1: Pattern,
      },
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
