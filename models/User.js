const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    firstname: {type:String, required:true},
    lastname: { type:String, required:true, min:6},
    email: {type:String, required:true, unique:true},
    password: { type:String, required:true, min:6},
    resetPassToken: {type:String},
    resetPassExp: {type: Date}
});

UserSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password,this.password)
}
const User = mongoose.model('users',UserSchema);

module.exports = User;