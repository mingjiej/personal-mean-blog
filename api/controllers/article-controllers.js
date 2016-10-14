module.exports.ArticleGetAll = function(req, res) {
  console.log("I will return all articles");
  res.status(200).json({"message" : "I will return all articles"});
}
