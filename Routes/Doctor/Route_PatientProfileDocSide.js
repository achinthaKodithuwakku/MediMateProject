const express = require("express");
const router = express.Router();

const db = require("../../database/database");

router.get("/docToPatientProfile", (req, res) => {
  try {
    res.render("Doctor/docToPatientProfile");
  } catch (error) {
    res.status(500).send(`<h1>Server Error</h1><p>${error.message}</p>`);
  }
});

module.exports = router;