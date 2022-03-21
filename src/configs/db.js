const mongoose = require("mongoose")

const connect = mongoose.connect("mongodb+srv://gurubilli:gurubilli@cluster0.dlpod.mongodb.net/relations?retryWrites=true&w=majority")

module.exports = connect