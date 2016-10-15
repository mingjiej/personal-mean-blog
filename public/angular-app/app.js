angular.module('main-page-article',['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when('/',{
        templateUrl : 'angular-app/article-main-display/articles.html',
        controller: ArticleController,
        controllerAs : 'vm'
    });
    // when('/articles/:id', {
    //     templateUrl : 'angular-app/hotel-list/hotels.html',
    //     controller: ArticleController,
    //     controllerAs : 'vm'
    // });
}
