var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  text : String,
  title : String,
  chapter : Number,
  paragraph : Number,
  creatorName : String,
  createdTime : String,
  LastModifyTime : String
});

mongoose.model('Article', articleSchema);
