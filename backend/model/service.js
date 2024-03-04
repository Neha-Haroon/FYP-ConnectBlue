const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: [
      "Carpenter",
      "Painter",
      "Plumber",
      "Electrician",
      "Driver",
      "Housekeeping",
    ],
    required: [true, "Please enter your product category!"],
  },
  description: {
    type: String,
    required: [true, "Please enter your service description!"],
  },
  charges: {
    type: Number,
  },
  ratings: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reviews: [
    {
      user: {
        type: Object,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      serviceId: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

module.exports = mongoose.model("Service", serviceSchema);
