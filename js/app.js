var news = angular.module('newsApp', ['ngRoute'])
.controller('newsController', ['$scope', 'news', newsController])
.controller('singleController', ['$scope', 'news','$location', '$routeParams', singleController])
.service('news', news)
.directive('newsCard', newsCard);

news.config(function($routeProvider){
  $routeProvider.when('/' , {
    templateUrl : 'partial/news.html',
    controller: 'newsController'
  })
  $routeProvider.when('/single/:singleId',{
    templateUrl : 'partial/single.html',
    controller: 'singleController'
  })
  $routeProvider.otherwise({ redirectTo : '/' });
})
