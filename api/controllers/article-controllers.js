module.exports.ArticleGetAll = function(req, res) {
  console.log("I will return all articles");
  res.status(200).json({"message" : "I will return all articles"});
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
