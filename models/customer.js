const { Schema, model } = require("../db/connection");

const CustomerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: {
      street: String,
      city: String,
      state: String,
      zipCode: String, 
  },
  email: String,
  telephone: String,
  creditCard: {
      network: String,
      number: String,
  }
})

const Customer = model("Customer", CustomerSchema);

module.exports = Customer;