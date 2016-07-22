(function(){
    angular
    .module('Atlas')
    .controller('aboutCtrl', aboutCtrl);
    
    function aboutCtrl(){
        var vm = this; 
        
        vm.message = "As part of our campaign to promote the entrepreneurship spirit within HCI students, the Hwa Chong Entrepreneurship Education Committee would like to propose the introduction of an online sales platform, ATLAS, to the school community";
        
    }
    
})();