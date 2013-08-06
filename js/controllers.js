"use strict";

function TeamController($scope, table) {
    $scope.teams = table.query();
}

function PredictionController($scope, predictions) {
    predictions.query(function(result) {
        $scope.$apply(function() {
            $scope.prediction = result;
        });
    },
    function(error) {
        alert("sad face");
    });
}