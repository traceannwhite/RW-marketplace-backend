require("dotenv").config();
const { Router } = require("express");
const Orders = require("../models/Order");
const router = Router();

// Index route
router.get("/", async (req, res) => {
  res.json(
    await Orders.find({})
      .populate("products")
      .catch((err) => res.status(400).json(err))
  );
});

// Find by id route
router.get("/:id", async (req, res) => {
  res.json(
    await Orders.findById(req.params.id)
      .populate("products")
      .catch((err) => res.status(400).json(err))
  );
});

// Create route
router.post("/", async (req, res) => {
  res.json(
    await Orders.create(req.body).catch((err) => res.status(400).json(err))
  );
});
// Update route
router.put("/:id", async (req, res) => {
  res.json(
    await Orders.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).catch((err) => res.status(400).json(err))
  );
});
// Destroy route
router.delete("/:id", async (req, res) => {
  res.json(
    await Orders.findByIdAndDelete(req.params.id).catch((err) =>
      res.status(400).json(err)
    )
  );
});

module.exports = router;
