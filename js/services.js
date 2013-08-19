"use strict";

angular.module("pp-services", ["ngResource"]).
    factory("predictions", function($resource) {
        var Prediction = Parse.Object.extend("Prediction");
        return {
            get: function(id, success, error) {
                return Prediction.get(id, { success: success, error: error });
            },
            query: function(success, error) {
                var query = new Parse.Query(Prediction);
                return query.find({ success: success, error: error });
            }
        }
    }).
    factory("table", function($resource) {
        return $resource("http://api.statsfc.com/premier-league/table.json",
                        { key: "free", callback: "JSON_CALLBACK", cache: true },
                        { query: { method: "JSONP", isArray: true } });
    }).
    factory("faCup", function($resource) {
        return {
            query: function() {
                return [];
            }
        };
        /*return $resource("http://api.statsfc.com/fa-cup/results.json",
                         { key: "free", callback: "JSON_CALLBACK", cache: true, limit: 6 },
                         { query: { method: "JSONP", isArray: true } });*/
    }).
    factory("leagueCup", function($resource) {
        return {
            query: function() {
                return [];
            }
        };
        /*return $resource("http://api.statsfc.com/league-cup/results.json",
                         { key: "free", callback: "JSON_CALLBACK", cache: true, limit: 6 },
                         { query: { method: "JSONP", isArray: true } });*/
    }).
    factory("championsLeague", function() {
        return {
            query: function() {
                return [];
            }
        };
    }).
    factory("topScorers", function($resource) {
        return $resource("http://api.statsfc.com/premier-league/top-scorers.json",
                         { key: "free", callback: "JSON_CALLBACK", cache: true, limit: 6 },
                         { query: { method: "JSONP", isArray: true } });
    }).
    factory("sackedManager", function() {
        return {
            query: function() {
                return null;
            }
        };
    }).
    factory("playerOfTheYear", function() {
        return {
            query: function() {
                return null;
            }
        };
    }).
    factory("youngPlayerOfTheYear", function() {
        return {
            query: function() {
                return null;
            }
        };
    }).
    factory("world", function(table, faCup, leagueCup, championsLeague, topScorers, sackedManager, playerOfTheYear, youngPlayerOfTheYear) {
        var returned = {
            premierLeague: false,
            faCup: false
        };
        var result = {};
        var returnResult = function(success, error) {
            // TODO handle errors
            if (returned.premierLeague &&
                returned.topScorers) {
                success(result);
            }
        }

        return {
            query: function(success, error) {
                // TODO handle errors
                result.faCup = faCup.query();
                result.leagueCup = leagueCup.query();
                result.championsLeague = championsLeague.query();
                result.sackedManager = sackedManager.query();
                result.playerOfTheYear = playerOfTheYear.query();
                result.youngPlayerOfTheYear = youngPlayerOfTheYear.query();
                returnResult(success, error);
                result.premierLeague = table.query(null, function() {
                    returned.premierLeague = true;
                    returnResult(success, error);
                });
                result.topScorers = topScorers.query(null, function() {
                    returned.topScorers = true;
                    returnResult(success, error);
                });
            }
        };
    });