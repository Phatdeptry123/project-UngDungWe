const controller = require("../controllers");
const express = require("express");

module.exports = (app) => {
  const auth = express.Router();
  auth.route("/signup").post(controller.auth.signup);
  auth.route("/signin").post(controller.auth.signin);
  app.use("/api/auth", auth);
};
