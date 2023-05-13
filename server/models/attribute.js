const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hasImages: {
      type: Boolean
    },
    values: {
      type: [
        {
          title: String,
          imgSrc: String,
        },
      ],
      // required: [true, "Must have at least one variant"],
    },
  },
  { timestamps: true }
);

const Attribute = mongoose.model("attribute", schema);

module.exports = Attribute;
