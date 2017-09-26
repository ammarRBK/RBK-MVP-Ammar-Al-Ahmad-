var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: {type:String,unique:true},
  password:String,
  completed: Boolean,
  task: String,
});

module.exports = mongoose.model('Todo', TodoSchema);