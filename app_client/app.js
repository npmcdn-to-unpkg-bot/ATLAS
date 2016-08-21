(function(){
    
    angular
        .module('Atlas', ['ui.router', 'stormpath', 'stormpath.templates']);
        
    
        function routing ($locationProvider, $stateProvider, $urlRouterProvider, $stormpath) {
            
    $stormpath.uiRouter({
        loginState: 'login',
        defaultPostLoginState: 'home'
        
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
            controller: 'aboutCtrl',
            sp: {
                 authenticate: true
                }
        })
        .state('login', {
            url: '/login',
            templateUrl: '/login2/login.view.html',
            controller: 'loginCtrl'
        });
    });
            
   
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
}
   angular
    .module('Atlas')
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$stormpath', routing]);
    
})();