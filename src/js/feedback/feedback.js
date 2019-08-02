const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    data: {
        name: String,
        directorate: String,
        feedback: String
    },
    created: Date
});

const Feedback = mongoose.model('Feedback', schema);

module.exports = Feedback;