const mongoose = require("mongoose");

const schema = mongoose.Schema({
  tour_name: {
    type: String,
  },
  tour_image: {
    type: String,
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "area",
  },
  tour_description: {
    type: String,
  },
  country: {
    type: String,
  },
  price: {
    type: String,
  },
  rating: {
    type: String,
  },
});

schema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("tour", schema);
