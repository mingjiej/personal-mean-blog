var express = require('express');
var router = express.Router();
var ctrlArticle = require('../controllers/article-controllers.js');
//get all artcle
router
      .route('/articles')
      .get(ctrlArticle.ArticleGetAll) //DONE
      .post(ctrlArticle.ArticleAddOne) //DONE
//get all article with same subject;
router
      .route('/articles/subject/:articleTitle')
      .get(ctrlArticle.ArticleGetAllByTitle)
//get most recent updated article


//get one article with id
router
      .route('/articles/:articleId')
      .get(ctrlArticle.ArticleById) // DONE
      .delete(ctrlArticle.ArticleDeleteById) // DONE

//update one article
router.route('/articles/update')
      .post(ctrlArticle.updateOneArticle)

module.exports = router;
