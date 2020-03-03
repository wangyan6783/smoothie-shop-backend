const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/login").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username })
    .then(user => {
      if (user.password === password) {
        res.json(user);
      } else {
        res.json("error");
      }
    })
    .catch(err => res.status(400).json("error"));
});

router.route("/signup").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = new User({ username, password });

  newUser
    .save()
    .then(() => res.json(newUser))
    .catch(err => res.status(400).json("error"));
});

module.exports = router;
