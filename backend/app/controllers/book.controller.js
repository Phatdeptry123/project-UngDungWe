
const mongoose = require("mongoose");
const DB = require("../models");
const model = DB.book;
const ObjectId = mongoose.Types.ObjectId;

exports.create = async (req, res, next) => {
  const modelO = new model({
    book_name: req.body.book_name,
    author: req.body.author,
    hinh: req.body.hinh,
    danhmuc: req.body.danhmuc,
    mota: req.body.mota,
    nxb: req.body.nxb,
    price: req.body.price,
    rating: req.body.rating,
  });
  try {
    const document = modelO.save();
    return res.send({ Message: "tạo thành công" });
  } catch (error) {
    return next(
      res.status(500).json({ Message: "không  thể create model" + error })
    );
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const document = await model.find().populate("danhmuc", "id ten_danhmuc");
    return res.json(document);
  } catch (error) {
    return next(
      res.status(500).json({ Message: "không  thể  lấy findAll" + error })
    );
  }
};

exports.findOne = async (req, res, next) => {
  const { id } = req.params;
  const condition = { 
    _id: id && mongoose.isValidObjectId(id) ? id : null,
  };

  try {
    const document = await model
      .findOne(condition)
      .populate("danhmuc", "id ten_danhmuc");
    if (!document) {
      return next(
        res.status(404).json({ Message: "không thể tìm thấy model" })
      );
    }
    return res.json(document);
  } catch (error) {
    return next(
      res.status(500).json({ Message: "không  thể  lấy findAll" + error })
    );
  }
};

exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(
      res.status(400).json({ Message: "thông tin không thế thay đổi" })
    );
  }
  const { id } = req.params;
  const condition = {
    _id: id && mongoose.isValidObjectId(id) ? id : null,
  };

  try {
    const document = await model.findByIdAndUpdate(condition, req.body, {
      new: true,
    });
    if (!document) {
      return next(
        res.status(404).json({ Message: "không thể tìm thấy model" })
      );
    }
    return res.send({ message: "đã update thành công", body: req.body });
  } catch (error) {
    console.log(error);
    return next(
      res
        .status(500)
        .json({ Message: ` không thể update model với id = ${req.params.id} ` })
    );
  }
};

exports.deleteOne = async (req, res, next) => {
  const { id } = req.params;
  const condition = {
    _id: id && mongoose.isValidObjectId(id) ? id : null,
  };

  try {
    const document = await model.findOneAndDelete(condition);
    if (!document) {
      return next(
        res.status(404).json({ Message: "không thể tìm thấy model" })
      );
    }
    return res.send({ message: "đã xóa model thành công" });
  } catch (error) {
    return next(
      res.status(500).json({
        Message: ` không thể xóa model với id = ${req.params.id} ` + error,
      })
    );
  }
};
exports.deleteAll = async (req, res, next) => {
  try {
    const data = await model.deleteMany({});
    return res.send({
      message: `${data.deletedCount}  model đã xóa thành công`,
    });
  } catch (error) {
    return next(
      res
        .status(500)
        .json({ Message: ` có lỗi khi đang xóa tất cả model` + error })
    );
  }
};
