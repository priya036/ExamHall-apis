const mongoose = require('mongoose')

module.exports.connectdb = ()=>{
    return mongoose.connect("mongodb+srv://priyadharshini:5799@cluster0.x8tsbwj.mongodb.net/ExamHall-Organizer")
}
