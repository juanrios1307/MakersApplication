var axios = require("axios");

const Controller = {};

const api_key = "pCVAlUIbbhsZTKAThZy9rhC6K862AMH6gX79K9gK";

//This endpoint is to get a default of 100 images from apod
Controller.getDefault = async (req, res) => {
  const url =
    "https://api.nasa.gov/planetary/apod?thumbs=true&count=100&api_key=" +
    api_key;

  var config = {
    method: "get",
    url,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      res.status(200).json({ data: response.data });
    })
    .catch(function (error) {
      res.status(400).json({ error: error });
    });
};

//This endpoint is to get a specific date
Controller.getByDate = async (req, res) => {
  const { date } = req.params;

  const url =
    "https://api.nasa.gov/planetary/apod?thumbs=true&date=" +
    date +
    "&api_key=" +
    api_key;

  var config = {
    method: "get",
    url,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      res.status(200).json({ data: response.data });
    })
    .catch(function (error) {
      res.status(400).json({ error: error });
    });
};

//This endpoint is to get images in a range
Controller.getByRangeDates = async (req, res) => {
  const { startDate, endDate } = req.params;

  const url =
    "https://api.nasa.gov/planetary/apod?thumbs=true&start_date=" +
    startDate +
    "&end_date=" +
    endDate +
    "&api_key=" +
    api_key;

  var config = {
    method: "get",
    url,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      res.status(200).json({ data: response.data });
    })
    .catch(function (error) {
      res.status(400).json({ error: error });
    });
};

//This is for get a exact number of registers
Controller.getNumbers = async (req, res) => {
  const { count } = req.params;

  const url =
    "https://api.nasa.gov/planetary/apod?thumbs=true&count=" +
    count +
    "&api_key=" +
    api_key;

  var config = {
    method: "get",
    url,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      res.status(200).json({ data: response.data });
    })
    .catch(function (error) {
      res.status(400).json({ error: error });
    });
};

module.exports = Controller;
