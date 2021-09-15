const { Schema, model } = require("../db/connection");

const SellerSchema = new Schema({
  name: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  products: [{ ref: "Product", type: Schema.Types.ObjectId }],
});

const Seller = model("Seller", SellerSchema);

module.exports = Seller;
