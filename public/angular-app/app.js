angular.module('main-page-article',['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when('/',{
        templateUrl : 'angular-app/article-main-display/articles.html',
        controller: ArticleController,
        controllerAs : 'vm'
    }).when('/articles/:id', {
        templateUrl : 'angular-app/article-read/article-read.html',
        controller: ArticleController,
        controllerAs : 'vm'
    });
}
