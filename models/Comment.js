const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

mongoose.Schema.Types.String.set('trim', true);

const commentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: {
        type: String,
        trim: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = model('Comment', commentSchema);
