const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name : {
        type : String,
        requied : true
    },
    image : {
        type : String,
        requied : true
    },
    price : {
        type : String,
        requied : true
    },
    size : {
        type : String,
        requied : true
    },



});
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu