const router = require('express').Router();
const Smoothie = require('../models/smoothie.model');

router.route('/').get((req, res) => {
    Smoothie.find()
        .then(smoothies => res.json(smoothies))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;