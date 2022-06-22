const { Router } = require("express");
const route = Router();
const Controller = require("../controllers/apodController");

route.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

route.get("/", Controller.getDefault);
route.get("/date/:date", Controller.getByDate);
route.get("/range/:startDate/:endDate", Controller.getByRangeDates);
route.get("/count/:count", Controller.getNumbers);

module.exports = route;
