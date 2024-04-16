const express = require("express");
const {
  createDonor,
  getDonors,
  getDonor,
  deleteDonor,
  updateDonor,
} = require("../controllers/donorController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// require auth for all donors routes
router.use(requireAuth);

//GET all donors
router.get("/", getDonors);

// GET a single donor
router.get("/:id", getDonor);

// POST a new donor
router.post("/", createDonor);

// DELETE a donor
router.delete("/:id", deleteDonor);

//UPDATE a donor
router.patch("/:id", updateDonor);

module.exports = router;
