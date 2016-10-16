angular.module('main-page-article').controller('ArticleController', ArticleController)
function ArticleController($routeParams, mainArticleFactory) {
    var vm = this;
    var id = $routeParams.id;
    mainArticleFactory.viewArticleById(id).then(function(response) {
        //console.log(response);
        vm.article = response.data;
    });
}
