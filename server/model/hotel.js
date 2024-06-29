const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    hotelAddress: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
