const mongoose = require('./db');

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        index: true
    },
    category: {
        type: String
    },
    alcohol: {
        type: Number
    },
    imageUrl: {
        type: String,
        unique: true
    }
});

const Type = mongoose.model('type', typeSchema);

module.exports = Type;