angular.module('main-page-article').controller('ArticleController', ArticleController)

function ArticleController(mainArticleFactory) {
    var vm = this;
    vm.title = "all article";
    mainArticleFactory.allArticle().then(function(response) {
        vm.articles = response.data;
    });
}
