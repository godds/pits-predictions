"use strict";

function AppController($scope, world, predictions) {
    $scope.standings = [];
    $scope.currentWorld;
    var currentPredictions;

    var calculatePremierLeaguePoints = function(league, prediction) {
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
        topScorers = topScorers.map(function(player) { return player.player; });
        var index = topScorers.indexOf(prediction);
        return index === 0 ? 0
            : index === 1 || index === 2 ? 2 : 4;
    };
    var calculatePersonPoints = function(person, prediction) {
        return !person || person == prediction ? 0 : 3;
    };
    var updateStandings = function() {
        if (!$scope.currentWorld || !currentPredictions) {
            return;
        }
        currentPredictions.forEach(function(item) {
            var points = {
                prediction: item,
                player: item.get("player"),
                premierLeague: calculatePremierLeaguePoints($scope.currentWorld.premierLeague, item.get("premierLeague")),
                faCup: calculateCupPoints($scope.currentWorld.faCup, item.get("faCup")),
                leagueCup: calculateCupPoints($scope.currentWorld.leagueCup, item.get("leagueCup")),
                championsLeague: calculateCupPoints($scope.currentWorld.championsLeague, item.get("championsLeague")),
                topScorer: calculateTopScorerPoints($scope.currentWorld.topScorer, item.get("topScorer")),
                sackedManager: calculatePersonPoints($scope.currentWorld.sackedManager, item.get("sackedManager")),
                playerOfTheYear: calculatePersonPoints($scope.currentWorld.playerOfTheYear, item.get("playerOfTheYear")),
                youngPlayerOfTheYear: calculatePersonPoints($scope.currentWorld.youngPlayerOfTheYear, item.get("youngPlayerOfTheYear"))
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
            return -1;
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
        $scope.selectedPlayer = standing;
    };
    $scope.hideDetails = function() {
        $scope.selectedPlayer = null;
    }
}