(function(){
    
    angular
    .module('Atlas')
    .directive('footerCommon', footerCommon);
    
    function footerCommon(){
        return {
            restrict: 'EA',
            templateUrl: '/common/directives/footerCommon/footerCommon.view.html'
        };
    }
})();