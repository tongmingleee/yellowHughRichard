var deposit = angular.module("deposit", []);

deposit.controller("depositController", depositController);
depositController.$inject = ["$window", "$scope", "$http"]

function depositController($window, $scope, $http) {
    // var url = "http://localhost:3000";
    var url = "http://ec2-54-208-152-167.compute-1.amazonaws.com";
    $scope.postError = false;
    $scope.successPost= false;
    $scope.deposit = function(account_number, amount) {
        console.log($scope.amount);
        console.log($scope.account_number);
        $http({
            url: url + "/api/deposit/",
            method: "POST",
            data: {
                account_number: account_number,
                amount: amount
            }
        }).then(function(data, status, headers, config) {
            $scope.postError = false;
            $scope.successPost = true;
            console.log("success post");

        }, function(response) {
            $scope.postError = true;
            $scope.successPost= false;
            console.log("fail");
        });
    };

};
