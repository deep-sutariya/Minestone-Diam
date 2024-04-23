const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: { type: String, required: false },
    email: { type: String, required: false },
    company: { type: String, required: false },
    message: { type: String, required: false },
}, { timestamps: false });


module.exports = mongoose.models.Message || mongoose.model('Message', MessageSchema);