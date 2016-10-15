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
  var id = req.params.articleId;
  Article.findById(id).exec(function(err, article) {
    var response = {
      status : 200,
      message : article
    };
    if(err) {
      console.log("Error finding article");
      response.status = 500
      response.message = err;
    } else if (!article){
      console.log("cannot found article with id: " + id);
      response.status = 404
      response.message = {
        "message" : "article id cannot found"
      };
    }
    res.status(response.status).json(response.message);
  });
}

module.exports.updateOneArticle = function(req, res) {
  console.log("I will update the article");
  res.status(200).json({"message" : "I will update article"});
}

module.exports.ArticleDeleteById = function(req, res) {
  var id = req.params.articleId;
  Article.findByIdAndRemove(id).exec(function(err, article) {
    if(err) {
      console.log("Error finding and deleting article");
      res.status(404).json(err);
    } else {
      console.log("deleted article with id " + id);
      res.status(204).json();
    }
  });
}
