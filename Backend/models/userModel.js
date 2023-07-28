const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        // required: true,
        default: "Pérez",
    },
    DNI: {
        type: Number,
        // required: true,
        default: 1111111111,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    rol: {
        type: String,
        required: true, 
    },
    phone: {
        type: Number,
        // required: true,
        default: 300202020,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User