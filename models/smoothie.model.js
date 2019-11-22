const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const smoothieSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    tastes: {type: String, required: true},
    price: { type: Number, required: true },
    imgUrl: { type: String }
}, {
    timestamps: true
})

const Smoothie = mongoose.model('Smoothie', smoothieSchema);

module.exports = Smoothie;