
const { ProjectProjectImageSchema } =require('./ProjectProjectImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


projectTitle:String , 


projectWp:  
  {
    type: Schema.Types.ObjectId,
    ref:'workpackage'
  }

 , 


projectImage:  
ProjectProjectImageSchema
 



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

