const mongoose = require("mongoose");

const schema = mongoose.Schema({
  book_name: {
    type: String,
  },
  author: {
    type: String,
  },
  hinh: {
    type: String,
  },
  danhmuc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "danhmuc",
  },
  mota: {
    type: String,
  },
  nxb: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
  },
});

schema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("book", schema);
