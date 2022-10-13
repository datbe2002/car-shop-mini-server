const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 50,
    },
    year: {
      type: Number,
      required: true,
      minlength: 4,
      maxlength: 4,
    },
    description: {
      type: String,
      required: true,
      minlength: 6,
    },
    imageUrl: {
      type: String,
      required: false,
      minlength: 4,
    },
    price: {
      type: Number,
      required: true,
      minlength: 4,
      maxlength: 20,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);
