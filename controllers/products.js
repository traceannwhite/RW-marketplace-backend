require("dotenv").config();
const { Router } = require("express");
const Products = require("../models/product");
const Seller = require("../models/seller");
const router = Router();

// Index route
router.get("/", async (req, res) => {
  res.json(
    await Products.find({})
      .populate("seller")
      .catch((err) => res.status(400).json(err))
  );
});

// Find by id route
router.get("/:id", async (req, res) => {
  res.json(
    await Products.findById(req.params.id)
      .populate("seller")
      .catch((err) => res.status(400).json(err))
  );
});

// Create route
router.post("/", async (req, res) => {
  res.json(
    await Products.create(req.body).catch((err) => res.status(400).json(err))
  );
});

// Update route
router.put("/:id", async (req, res) => {
  res.json(
    await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).catch((err) => res.status(400).json(err))
  );
});

// Destroy route
router.delete("/:id", async (req, res) => {
  res.json(
    await Products.findByIdAndDelete(req.params.id).catch((err) =>
      res.status(400).json(err)
    )
  );
});

module.exports = router;
