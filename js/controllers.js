"use strict";

function AppController($scope, world, predictions) {
    $scope.standings = [];
    $scope.currentWorld;
    var currentPredictions;

    var transformPrediction = function(item) {
        return {
            premierLeague: item.get("premierLeague"),
            faCup: item.get("faCup"),
            leagueCup: item.get("leagueCup"),
            championsLeague: item.get("championsLeague"),
            topScorer: item.get("topScorer"),
            sackedManager: item.get("sackedManager"),
            playerOfTheYear: item.get("playerOfTheYear"),
            youngPlayerOfTheYear: item.get("youngPlayerOfTheYear")
        };
    };
    var calculatePremierLeaguePoints = function(league, prediction) {
        league = league.map(function(item) { return item.teamshort; });
        var result = 0;
        prediction.forEach(function(item, index) {
            result += Math.abs(index - league.indexOf(item));
        });
        return result;
    };
    var calculateCupPoints = function(results, prediction) {
        if (!results || !results.length) {
            return 0;
        }
        // TODO 2 4 6
        return 0;
    };
    var calculateTopScorerPoints = function(topScorers, prediction) {
        if (!topScorers || !topScorers.length) {
            return 0;
        }
        for (var i = 0; i < topScorers.length && i < 3; i++) {
            if (topScorers[i].player == prediction) {
                return i === 0 ? 0
                     : i == 1 || i == 2 ? 2 : 4;
            }
        }
        return 4;
    };
    var calculatePersonPoints = function(person, prediction) {
        return !person || person == prediction ? 0 : 3;
    };
    var updateStandings = function() {
        if (!$scope.currentWorld || !currentPredictions) {
            return;
        }
        $scope.$apply(function() {
            currentPredictions.forEach(function(item) {
                var prediction = transformPrediction(item);
                var points = {
                    prediction: prediction,
                    player: item.get("player"),
                    premierLeague: calculatePremierLeaguePoints($scope.currentWorld.premierLeague, prediction.premierLeague),
                    faCup: calculateCupPoints($scope.currentWorld.faCup, prediction.faCup),
                    leagueCup: calculateCupPoints($scope.currentWorld.leagueCup, prediction.leagueCup),
                    championsLeague: calculateCupPoints($scope.currentWorld.championsLeague, prediction.championsLeague),
                    topScorer: calculateTopScorerPoints($scope.currentWorld.topScorers, prediction.topScorer),
                    sackedManager: calculatePersonPoints($scope.currentWorld.sackedManager, prediction.sackedManager),
                    playerOfTheYear: calculatePersonPoints($scope.currentWorld.playerOfTheYear, prediction.playerOfTheYear),
                    youngPlayerOfTheYear: calculatePersonPoints($scope.currentWorld.youngPlayerOfTheYear, prediction.youngPlayerOfTheYear)
                };
                points.total = points.premierLeague
                    + points.faCup
                    + points.leagueCup
                    + points.championsLeague
                    + points.topScorer
                    + points.sackedManager
                    + points.playerOfTheYear
                    + points.youngPlayerOfTheYear;
                $scope.standings.push(points);
            });
            $scope.standings.sort(function(a, b) {
                return a.total - b.total;
            });
        });
    };

    world.query(function(result) {
        $scope.currentWorld = result;
        updateStandings();
    },
    function(error) {
        console.log("error fetching world");
    });

    predictions.query(function(result) {
        currentPredictions = result;
        updateStandings();
    },
    function(error) {
        console.log("error fetching predictions");
    });

    $scope.showDetails = function(standing) {
        if (standing != $scope.selectedPlayer) {
            $scope.selectedPlayer = standing;
        }
        else {
            $scope.selectedPlayer = null;
        }
    };
    $scope.hideDetails = function() {
        $scope.selectedPlayer = null;
    }
}