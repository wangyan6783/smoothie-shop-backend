const router = require('express').Router();
const Smoothie = require('../models/smoothie.model');

router.route('/').get((req, res) => {
    Smoothie.find()
        .then(smoothies => res.json(smoothies))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const tastes = req.body.tastes;
    const price = req.body.price;
    const imgUrl = req.body.imgUrl;

    const newSmoothie = new Smoothie({name, description, tastes, price, imgUrl});

    newSmoothie.save()
        .then(() => res.json(newSmoothie))
        .catch(err => res.status(400).json('error'));
})

module.exports = router;