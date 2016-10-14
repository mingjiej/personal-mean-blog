var express = require('express');
var router = express.Router();
var ctrlArticle = require('../controllers/article-controllers.js');
//get all artcle
router
      .route('/articles')
      .get(ctrlArticle.ArticleGetAll)

//get all article with same subject;


//get most recent updated article


//get one article with id


module.exports = router;
