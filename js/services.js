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
        return {
            query: function() {
                return [ "Man City", "Liverpool", "Chelsea", "Arsenal", "Everton", "Tottenham", "Man Utd", "Southampton", "Stoke", "Newcastle", "Crystal Palace", "Swansea", "West Ham", "Sunderland", "Aston Villa", "Hull", "West Brom", "Norwich", "Fulham", "Cardiff" ];
            }
        };
    }).
    factory("faCup", function($resource) {
        return {
            query: function() {
                return { winner: "Arsenal", final: [ "Arsenal", "Hull"], semi: [ "Wigan", "Arsenal", "Hull", "Sheffield Utd" ] };
            }
        };
    }).
    factory("leagueCup", function($resource) {
        return {
            query: function() {
                return { winner: "Man City", final: [ "Man City", "Sunderland" ], semi: [ "Man City", "West Ham", "Man Utd", "Sunderland" ] };
            }
        };
    }).
    factory("championsLeague", function() {
        return {
            query: function() {
                return { winner: "Real Madrid", final: [ "Atletico Madrid", "Real Madrid" ], semi: [ "Atletico Madrid", "Real Madrid", "Barcelona", "Bayern Munich" ] };
            }
        };
    }).
    factory("topScorers", function($resource) {
        return {
            query: function() {
                return [ "Luis Suarez", "Daniel Sturridge", "Yaya Toure", "Sergio Aguero", "Wayne Rooney" ];
            }
        };
    }).
    factory("sackedManager", function() {
        return {
            query: function() {
                return "Paolo Di Canio";
            }
        };
    }).
    factory("playerOfTheYear", function() {
        return {
            query: function() {
                return "Luis Suarez";
            }
        };
    }).
    factory("youngPlayerOfTheYear", function() {
        return {
            query: function() {
                return "Eden Hazard";
            }
        };
    }).
    factory("world", function(table, faCup, leagueCup, championsLeague, topScorers, sackedManager, playerOfTheYear, youngPlayerOfTheYear) {
        return {
            query: function(success, error) {
                var result = {};
                result.faCup = faCup.query();
                result.leagueCup = leagueCup.query();
                result.championsLeague = championsLeague.query();
                result.sackedManager = sackedManager.query();
                result.playerOfTheYear = playerOfTheYear.query();
                result.youngPlayerOfTheYear = youngPlayerOfTheYear.query();
                result.premierLeague = table.query();
                result.topScorers = topScorers.query();
                success(result);
            }
        };
    });
