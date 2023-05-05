const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  variants: {
    type: [
      {
        title: String,
        imgSrc: String,
      },
    ],
    required: [true, "Must have at least one variant"],
  },
}, { timestamps: true } );

const Customization = mongoose.model('customization', schema)

module.exports = Customization;
