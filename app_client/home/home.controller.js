(function(){
    angular
    .module('Atlas')
    .controller('homeCtrl', homeCtrl);
    
    homeCtrl.$inject = ['$scope','$location'];
    
    function homeCtrl($scope,$location){
        $scope.returnPage = $location.search().page || '/';
    }
    

})();