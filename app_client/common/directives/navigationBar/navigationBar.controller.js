(function(){
    
    angular.module('atlas'),
    angular.directive('navigationBar', navigationBar);
    
    function navigationBar (){
        return{
            restrict: 'EA',
            templateURL: '/coommon/directives/navigationBar/navigationBar.html'
        };
    }
})();