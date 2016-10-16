angular.module('main-page-article').factory('mainArticleFactory', mainArticleFactory);

function mainArticleFactory($http) {

    return {
        allArticle : allArticle,
        viewArticleById : viewArticleById
    };

    function allArticle() {
        return $http.get('/api/articles').then(complete).catch(failed);
    }

    function viewArticleById(id) {
        return $http.get('/api/articles/' + id).then(complete).catch(failed);
    }

    function complete(response) {
        return response;
    }

    function failed(error) {
        console.log(error.statusText);
    }
}
