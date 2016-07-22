(function(){
    
    angular.module('Atlas', ['ngRoute', 'ngSanitize']);
    
        function routing ($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })
        .when('/about', {
            controller: 'aboutCtrl',
            templateUrl: '/about/about.view.html',
            controllerAs: 'vm'
        })
        .when('/shop', {
            controller: 'shopCtrl',
            templateUrl: '/shop/shop.view.html',
            controllerAs: 'vm'
        })
        .when('/login',{
            controller: 'loginCtrl',
            templateUrl: '/auth/login.view.html',
            controllerAs: 'vm'
        })
        .when('/TandC', {
            controller: 'TandCCtrl',
            templateUrl: '/TandC/TandC.view.html',
            controllerAs: 'vm'
        })
      //  .otherwise({redirectTo: '/'});
        
        }
   angular
    .module('Atlas')
    .config(['$routeProvider', routing]);
    
})();