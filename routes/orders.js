const router = require('express').Router();
const Order = require('../models/order.model');

router.route('/').get((req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const items = req.body.items;
    const address = req.body.address;

    const newOrder = new Order({
        username,
        items,
        address
    });

    newOrder.save()
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Order.findByIdAndDelete(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Order.findById(req.params.id)
    .then(order => {
        order.username = req.body.username;
        order.items = req.body.items;
        order.address = req.body.address;

        order.save()
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error: ' + err));
    });
});

module.exports = router;