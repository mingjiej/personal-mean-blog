var mongoose = require('mongoose');
var Article = mongoose.model('Article');

module.exports.ArticleGetAll = function(req, res) {
  //console.log("I will return all articles");
  Article.find().exec(function(err, articles){
    if(err) {
      console.log("Error finding articles");
      res.status(400).json({"message" : "error on finding all articles"})
    } else {
      console.log("Found articles : " + articles.length);
      res.status(200).json(articles);
    }
  });
}

module.exports.ArticleAddOne = function(req, res) {
  console.log("I will add one articles");
  res.status(200).json({"message" : "I will add one articles"});
}

module.exports.ArticleGetAllBySubject = function(req, res) {
  console.log("I will get all articles with same subject of " + req.params.subject);
  res.status(200).json({"message" : "I will get all articles with same subject of " + req.params.subject});
}

module.exports.ArticleById = function(req, res) {
  console.log("I will get the article with id of " + req.params.articleId);
  res.status(200).json({"message" : "I will get all articles with id of " + req.params.articleId});
}

module.exports.updateOneArticle = function(req, res) {
  console.log("I will update the article");
  res.status(200).json({"message" : "I will update article"});
}
