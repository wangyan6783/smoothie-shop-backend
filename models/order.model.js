const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    username: { type: String, required: true },
    items: { type: Object, required: true },
    address: { type: String, required: true },
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;