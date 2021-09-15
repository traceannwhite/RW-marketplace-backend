const { Schema, model } = require("../db/connection");

const OrderSchema = new Schema({
  customer: { ref: "Customer", type: Schema.Types.ObjectId, required: true },
  cart: [
    {
      product: { ref: "Product", type: Schema.Types.ObjectId, required: true },
      quantity: Number,
      price: Number,
    },
  ],
  status: String,
  creationDate: TimeStamp,
  shipDate: Time,
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  creditCard: {
    network: String,
    number: String,
  },
});

const Order = model("Order", OrderSchema);

module.exports = Order;
