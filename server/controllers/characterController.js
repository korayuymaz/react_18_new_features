const fs = require("fs");

const characters = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/characters/data.json`)
);

exports.getAllCharacters = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: characters.length,
    data: {
      characters,
    },
  });
};

exports.getCharac
