(function(){
    
    angular
        .module('Atlas', ['ngRoute']);
        
    
        function routing ($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl'
        })

        .otherwise({redirectTo: '/'});
        
}
   angular
    .module('Atlas')
    .config(['$routeProvider', routing]);
    
    
})();