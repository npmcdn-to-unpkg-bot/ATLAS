(function(){
    angular
    .module('Atlas')
    .controller('homeCtrl', homeCtrl);
    
    homeCtrl.$inject = ['$scope','$location', '$firebaseAuth'];
    
    function homeCtrl($scope,$location,$firebaseAuth){
        $scope.returnPage = $location.search().page || '/';
        
        $scope.authObj = $firebaseAuth();
        $scope.authObj.$onAuthStateChanged(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
        });
    }
    

})();