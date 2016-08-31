(function(){
    angular
    .module('Atlas')
    .controller('loginCtrl', loginCtrl);
    
    loginCtrl.$inject = ['$scope', '$http', '$window', '$location', '$firebaseAuth'];
    
    function loginCtrl($scope, $http, $window, $location, $firebaseAuth){
        
        $scope.returnPage = $location.path() || '/';
        $scope.formError = "";
        $scope.username = "";
        $scope.password = "";
        $scope.googleLoginError = "";
        
    $scope.login = function() {
        if (!$scope.username || !$scope.password)
        {
            $scope.formError = "Please fill in everything..";
            return false;
        }
        else if ($scope.username || $scope.password) {
            /*
           return $http.post('/api/test', {
               username: $scope.username,
                password: $scope.password
                }); */
                console.log("Yeah working lah");
            }
        };
    
    $scope.GoogleLogin = function() {
        $scope.authObj = $firebaseAuth();
        $scope.authObj.$signInWithPopup("google").then(function(result) {
        console.log("Signed in as:", result);
        $http.post('/api/login', {
            uid: result.user.uid,
            ownEmail: result.user.email,
            username: result.user.displayName,
            profilePic: result.user.photoURL
        });
        $scope.GoogleLoginError = "Hi " + result.user.displayName;
    }).catch(function(error) {
        console.error("Authentication failed:", error);
        $scope.GoogleLoginError = "Sorry, please try again...";
    });
  
    };
    
}
})();