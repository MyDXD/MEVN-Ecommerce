const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    order: [],
    total: { type: Number, min: 0 },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true
  },
  {
    collection: "order",
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;