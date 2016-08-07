(function(){
    
    angular
        .module('Atlas', ['ui.router']);
        
    
        function routing ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('index', {
            url: '',
            abstract: true,
            templateUrl: 'index.html'
        })
        .state('index.home', {
            url: '/',
            template: "/hone/home.view.html",
            controller: "homeCtrl"
        });
                /*"index": {templateUrl: "/home/home.view.html"},
                "contact": {templateUrl: '/nested/contact.view.html'},
                "home" : {templateUrl: '/nested/home.view.html'}
            }
        })
        .state('contact', {
            url: "/contact",
            parent: 'index',
            templateUrl: "/nested/contact.view.html"
        })
        .state('home', {
            url: "/home",
            parent: 'index',
            templateUrl: '/nested/home.view.html'
        })
        .state('notify-wrap', {
            url: '/notify-wrap',
            parent:'index',
            templateUrl: '/nested/notify-wrap.view.html'
        })
        .state('side-left',{
            url: '/side-left',
            templateUrl: '/nested/side-left.html'
        })
        .state('side-right', {
            url:'/side-right',
            templateUrl: '/nested/side-right.html'
        });*/
        
        $urlRouterProvider.otherwise({redirectTo: '/'});

}
   angular
    .module('Atlas')
    .config(['$stateProvider', '$urlRouteProvider', routing]);
    
    
})();