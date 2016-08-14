(function(){
    angular
    .module('Atlas')
    .controller('aboutCtrl', aboutCtrl);
    
    aboutCtrl.$inject = ['$scope', '$http'];
    
    function aboutCtrl($scope, $http){
    
    $scope.error = "Hello World";
        
    }
    

})();