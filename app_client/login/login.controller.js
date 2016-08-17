(function(){
    angular
    .module('Atlas')
    .controller('loginCtrl', loginCtrl);
    
    loginCtrl.$inject = ['$scope', '$http'];
    
    function loginCtrl($scope, $http){
    
    $scope.error = "Hello World";
        
    }
    

})();