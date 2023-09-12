const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    ten_danhmuc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

schema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const danhmuc = mongoose.model("danhmuc", schema);

module.exports = danhmuc;
