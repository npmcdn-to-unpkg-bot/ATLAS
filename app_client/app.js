(function(){
    
    angular
        .module('Atlas', ['ui.router']);
        
    
        function routing ($locationProvider, $stateProvider, $urlRouterProvider) {
            
   $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/about/about.view.html',
            controller: 'aboutCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/login/login.view.html',
            controller: 'loginCtrl'
        });
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
}
   angular
    .module('Atlas')
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', routing]);
    
})();