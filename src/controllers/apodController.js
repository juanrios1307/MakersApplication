var axios = require("axios");

const Controller = {};

Controller.getDefault = async (req, res) => {
  const url =
    "https://api.nasa.gov/planetary/apod?count=100&api_key=pCVAlUIbbhsZTKAThZy9rhC6K862AMH6gX79K9gK";

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
