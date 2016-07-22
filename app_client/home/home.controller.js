(function(){
    angular
    .module('Atlas')
    .controller('homeCtrl', homeCtrl);
    
    homeCtrl.$inject = ['$scope'];
    
    function homeCtrl($scope){
        var vm = this;
        console.log(window.location);
        vm.message = "Hello World. I am Yk WON testing AngularJS";
        
        vm.contacts = [
            { name: 'Shuvro', number: '1234' },
            { name: 'Ashif', number: '4321' },
            { name: 'Anik', number: '2314' }
            ];
    }
    
})();