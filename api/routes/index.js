var express = require('express');
var router = express.Router();
var ctrlArticle = require('../controllers/article-controllers.js');
//get all artcle
router
      .route('/articles')
      .get(ctrlArticle.ArticleGetAll)
      .post(ctrlArticle.ArticleAddOne)
//get all article with same subject;
router
      .route('/articles/:subject')
      .get(ctrlArticle.ArticleGetAllBySubject)
//get most recent updated article


//get one article with id
router
      .route('/article/:articleId')
      .get(ctrlArticle.ArticleById)
      .delete(ctrlArticle.ArticleDeleteById)

//update one article
router.route('/article')
      .post(ctrlArticle.updateOneArticle)

module.exports = router;
