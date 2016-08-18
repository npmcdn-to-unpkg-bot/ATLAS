(function(){
    angular
    .module('Atlas')
    .controller('loginCtrl', loginCtrl);
    
    loginCtrl.$inject = ['$scope', '$http', '$window', '$location'];
    
    function loginCtrl($scope, $http, $window, $location){
        
        $scope.returnPage = $location.path() || '/';
        $scope.formError = "";
        $scope.username = "";
        $scope.password = "";
        
    $scope.login = function() {
        if (!$scope.username || !$scope.password)
        {
            $scope.formError = "Please fill in all your credentials";
            return false;
        }
        else if ($scope.username || $scope.password) {
           return $http.post('/api/login', {
               username: $scope.username,
                password: $scope.password
                });
            }
        };
        
    }
    

})();