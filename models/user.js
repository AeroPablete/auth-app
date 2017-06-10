const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
    email: {type: String, unique: true, lowercase: true},
    password: String
});

const model = mongoose.model('user', userSchema);
module.exports = model;