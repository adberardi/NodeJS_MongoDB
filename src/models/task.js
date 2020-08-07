const mongoose = require('mongoose');
const Shema = mongoose.Schema;


const taskShema = new Shema({
    title: String,
    desciption: String,
    status: {
        type:Boolean,
        default: false
    }
});


module.exports = mongoose.model('task',taskShema) ;