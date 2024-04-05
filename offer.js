const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        post: {
            type: String,
            required: true
        },
        skills: {
            type: String,
            required: true
        }
    });

    const Offer = mongoose.model('Offer', offerSchema);

    module.exports = Offer;