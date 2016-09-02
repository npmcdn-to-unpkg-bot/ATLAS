(function(){
    
    angular
        .module('Atlas', ['firebase', 'ui.router']);
        
        function routing ($locationProvider, $stateProvider, $urlRouterProvider) {
            
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl',
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
        
    $urlRouterProvider.rule(function($injector, $location) {
    var path = $location.path();
    var hasTrailingSlash = path[path.length-1] === '/';
    if(hasTrailingSlash) {
      var newPath = path.substr(0, path.length - 1); 
      return newPath; 
    }
  });
  
    $urlRouterProvider.otherwise('/');
   
    $locationProvider.html5Mode({enabled: true, requireBase: false});
}
   angular
    .module('Atlas')
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', routing]);
    
})();