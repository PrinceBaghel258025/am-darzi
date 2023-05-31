const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    variants: {
        type: [
            {
                title: String,
                imgSrc: String
            }
        ]
    }
},
{timestamps: true})

const Customization = mongoose.model('Customization', schema);

module.exports = Customization;