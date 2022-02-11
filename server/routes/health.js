const router = require("express").Router();
let Health = require("../models/health.model");

router.route("/").get((req, res) => {
  Health.find()
    .then((health) => res.json(health))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const fullname = req.body.fullname;
  const temperature = req.body.temperature;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;

  const newHealthDeclaration = new Health({
    fullname,
    temperature,
    email,
    phonenumber,
  });

  newHealthDeclaration
    .save()
    .then((health) => res.json("New Record Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
