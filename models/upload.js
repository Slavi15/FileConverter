const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ttl = require('mongoose-ttl')

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

uploadSchema.plugin(ttl, { ttl: 180000 });

module.exports = mongoose.models.Upload || mongoose.model('Upload', uploadSchema, 'uploads');