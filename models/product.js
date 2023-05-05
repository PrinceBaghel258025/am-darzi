const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 8,
      max: 50,
      required: true,
    },
    shortDesc: {
      type: String,
      // min: 30,
      max: 50,
      required: true,
    },
    description: {
      type: String,
      requried: true,
      // min: 50,
    },
    price: {
      type: Number,
      required: true,
    },
    // available only in these colors
    color: {
      type: [String],
    },
    // all available fabric types (may refer to fabric model)
    fabric: {
      type: [String],
    },
    // suitable only for these occassions
    occasion: {
      type: [String],
    },
    // lies in the below categories
    categories: [
      {
        // type: [String],
        // enum: ["tuxedo", "beach weddings", "round collar"]
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
      },
    ],
    customs: [
      {
        custom: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "customization",
        },
        pattern: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Suit = mongoose.model("product", schema);

module.exports = Suit;
