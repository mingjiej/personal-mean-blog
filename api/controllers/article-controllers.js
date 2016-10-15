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
  //console.log("I will add one articles");
  //res.status(200).json({"message" : "I will add one articles"});
  Article.create({
    text : req.body.text,
    title : req.body.title,
    subtitle : req.body.subtitle,
    chapter : parseInt(req.body.chapter, 10),
    paragraph : parseInt(req.body.paragraph, 10),
    creatorName : req.body.creatorName,
    //TODO : change date format
    createdTime : Date.now.toString(),
  }, function(err, article) {
    if(err) {
      console.log("Error creating article");
      res.status(400).json(err);
    } else {
      console.log("Created article");
      res.status(201).json(article);
    }
  });

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
