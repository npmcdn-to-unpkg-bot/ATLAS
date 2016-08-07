(function(){
    angular
    .module('Atlas')
    .controller('homeCtrl', homeCtrl);
    
    homeCtrl.$inject = ['$scope'];
    
    function homeCtrl($scope){
    var vm = this;
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
}
})();