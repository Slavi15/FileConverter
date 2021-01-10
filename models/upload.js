const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
    path: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.models.Upload || mongoose.model('Upload', uploadSchema, 'uploads');