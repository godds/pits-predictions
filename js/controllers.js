"use strict";

function TeamController($scope, table) {
    $scope.teams = table.query();
}