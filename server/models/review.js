const mongoose = require('mongoose')

const schema = new mongoose.Schema({


    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    star: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    reviewTitle: {
        type: String,
        required: true
    },
    reviewDesc: {
        type: String,

    },
    fabricNum: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    qualityNum: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    fitNum: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    }
})