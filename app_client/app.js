(function(){
    
    angular
        .module('Atlas', ['ngRoute']);
        
    
        function routing ($routeProvider, $locationProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl'
        })
        .when('/about', {
            templateUrl: '/about/about.view.html',
            controller: 'aboutCtrl'
        })
        .when('/login', {
            templateUrl: '/login/login.view.html',
            controller: 'loginCtrl'
        })
        .otherwise({redirectTo: '/'});
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
}
   angular
    .module('Atlas')
    .config(['$routeProvider', '$locationProvider', routing]);
    
    
})();