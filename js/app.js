var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
    console.log("In myController...");

        $scope.newUser = {};
        $scope.clickedUser = {};
        $scope.message = "";

        $scope.users = [
            {username: "Pretty", fullName: "Pretty Notshokovu", email: "prettyn67@gmail.com"},
            {username: "Vuyo", fullName: "Luvuyo Siyoni", email: "luvuyosiyoni@gmail.com"},
            {username: "Sibusiso", fullName: "Sibusiso Gabuza", email: "sbugbz@gmail.com"},
            {username: "Linokuhlekamva", fullName: "Linokuhlekamva Notshokovu", email: "pretty@projectcodex.co"}
        ];

        $scope.saveUser = function(){
            $scope.users.push($scope.newUser);
            $scope.newUser = {};
            $scope.message = " New User Added Successfully!";
        };

        $scope.selectUser = function(user){
            console.log(user);
            $scope.clickedUser = user;
        };

        $scope.updateUser = function(){
             $scope.message = " User Updated Successfully!";
        };

        $scope.deleteUser = function(){
            $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
             $scope.message = " User Deleted Successfully!";
        };

        $scope.clearMessage = function(){
             $scope.message = "";
        };
});