const { Schema, model } = require("../db/connection");

const ProductSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: number, required: true },
  quantity: {type: Number, required: true },
  SKU: Number,
  seller: { ref: "Seller", type: Schema.Types.ObjectId, required: true },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
