const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    artist: {
      type: String,
      maxlength: 50,
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    period: {
      type: String,
      maxlength: 50,
    },
    images: {
      type: Array,
      default: [],
    },
    objs: {
      type: String,
    },
    material: {
      type: String,
      maxlength: 20,
    },
    category: {
      type: Number,
      default: 1,
    },
    location: {
      type: String,
    },
    dimension: {
      type: Object,
      default: { length: "", width: "", height: "" },
    },
  },
  { timestamps: true }
);

productSchema.index(
  {
    title: "text",
    description: "text",
  },
  {
    weights: {
      name: 5,
      description: 1,
    },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
