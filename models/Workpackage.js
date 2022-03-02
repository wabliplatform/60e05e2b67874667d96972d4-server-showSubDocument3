
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workpackageSchema = new Schema({
Underscoreid:String , 


wpName:String , 


wpDescription:String 



})

module.exports = {
  Workpackage : mongoose.model('workpackage', workpackageSchema),
}

