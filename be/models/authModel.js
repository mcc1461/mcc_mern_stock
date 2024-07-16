const mongoose = require('mongoose');

const AuthSchema  = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim : true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7
    }
}, {timestamps: true}
);

module.exports = mongoose.model('AuthModel', AuthSchema);