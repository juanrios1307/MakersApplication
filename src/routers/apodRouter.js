const { Router } = require("express");
const route = Router();
const Controller = require("../controllers/apodController");

route.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

route.get("/", Controller.getDefault);

module.exports = route;
