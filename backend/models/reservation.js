const mongoose  = require('mongoose');

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        selected:{
            type: Object,
            required: false,
        }

    }
)
module.exports = mongoose.model("Reservations",schema);