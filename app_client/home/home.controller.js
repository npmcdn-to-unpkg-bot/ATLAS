(function(){
    angular
    .module('Atlas')
    .controller('homeCtrl', homeCtrl);
    
    homeCtrl.$inject = ['$scope', '$http'];
    
    function homeCtrl($scope, $http){
    
    $scope.error = "Hello World";
    
    $scope.onSubmit = function() {
           return $http.post ('/api', {
                ownEmail: $scope.ownEmail
            });
            };
        
    }
    

})();