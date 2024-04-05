const mongoose = require('mongoose');

const evenmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    });

    const Evenement = mongoose.model('Evenement', evenmentSchema);

    module.exports = Evenement;