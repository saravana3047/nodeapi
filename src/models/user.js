const mongoose = require('./db')
const userSchema = mongoose.Schema({
    name :{
        type : String
    },
    age : {
        type : Number
    }
},{
    timestamps:true
})
const User = mongoose.model('User',userSchema)

module.exports = User