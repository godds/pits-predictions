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
        /*return {
            query: function() {
                return [
                    {
                        "position": 1,
                        "team_id": 9825,
                        "team": "Arsenal",
                        "teamshort": "Arsenal",
                        "teampath": "arsenal",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": "championsleague"
                    },
                    {
                        "position": 2,
                        "team_id": 10252,
                        "team": "Aston Villa",
                        "teamshort": "Aston Villa",
                        "teampath": "aston-villa",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": "championsleague"
                    },
                    {
                        "position": 3,
                        "team_id": 8344,
                        "team": "Cardiff City",
                        "teamshort": "Cardiff",
                        "teampath": "cardiff-city",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": "championsleague"
                    },
                    {
                        "position": 4,
                        "team_id": 8455,
                        "team": "Chelsea",
                        "teamshort": "Chelsea",
                        "teampath": "chelsea",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": "championsleague"
                    },
                    {
                        "position": 5,
                        "team_id": 9826,
                        "team": "Crystal Palace",
                        "teamshort": "Crystal Palace",
                        "teampath": "crystal-palace",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": "uefacup"
                    },
                    {
                        "position": 6,
                        "team_id": 8668,
                        "team": "Everton",
                        "teamshort": "Everton",
                        "teampath": "everton",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 7,
                        "team_id": 9879,
                        "team": "Fulham",
                        "teamshort": "Fulham",
                        "teampath": "fulham",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 8,
                        "team_id": 8667,
                        "team": "Hull City",
                        "teamshort": "Hull",
                        "teampath": "hull-city",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 9,
                        "team_id": 8650,
                        "team": "Liverpool",
                        "teamshort": "Liverpool",
                        "teampath": "liverpool",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 10,
                        "team_id": 8456,
                        "team": "Manchester City",
                        "teamshort": "Man City",
                        "teampath": "manchester-city",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 11,
                        "team_id": 10260,
                        "team": "Manchester United",
                        "teamshort": "Man Utd",
                        "teampath": "manchester-united",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 12,
                        "team_id": 10261,
                        "team": "Newcastle United",
                        "teamshort": "Newcastle",
                        "teampath": "newcastle-united",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 13,
                        "team_id": 9850,
                        "team": "Norwich City",
                        "teamshort": "Norwich",
                        "teampath": "norwich-city",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 14,
                        "team_id": 8466,
                        "team": "Southampton",
                        "teamshort": "Southampton",
                        "teampath": "southampton",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 15,
                        "team_id": 10194,
                        "team": "Stoke City",
                        "teamshort": "Stoke",
                        "teampath": "stoke-city",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 16,
                        "team_id": 8472,
                        "team": "Sunderland",
                        "teamshort": "Sunderland",
                        "teampath": "sunderland",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 17,
                        "team_id": 10003,
                        "team": "Swansea City",
                        "teamshort": "Swansea",
                        "teampath": "swansea-city",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": ""
                    },
                    {
                        "position": 18,
                        "team_id": 8586,
                        "team": "Tottenham Hotspur",
                        "teamshort": "Tottenham",
                        "teampath": "tottenham-hotspur",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": "relegation"
                    },
                    {
                        "position": 19,
                        "team_id": 8659,
                        "team": "West Bromwich Albion",
                        "teamshort": "West Brom",
                        "teampath": "west-bromwich-albion",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": "relegation"
                    },
                    {
                        "position": 20,
                        "team_id": 8654,
                        "team": "West Ham United",
                        "teamshort": "West Ham",
                        "teampath": "west-ham-united",
                        "played": 0,
                        "won": 0,
                        "drawn": 0,
                        "lost": 0,
                        "for": 0,
                        "against": 0,
                        "difference": 0,
                        "home": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "away": {
                            "played": 0,
                            "won": 0,
                            "drawn": 0,
                            "lost": 0,
                            "for": 0,
                            "against": 0,
                            "difference": 0
                        },
                        "points": 0,
                        "info": "relegation"
                    }
                ];
            }
        };
        */
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
        return {
            query: function() {
                return [];
            }
        };
        /*return $resource("http://api.statsfc.com/premier-league/top-scorers.json",
                         { key: "free", callback: "JSON_CALLBACK", cache: true, limit: 6 },
                         { query: { method: "JSONP", isArray: true } });*/
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
            //if (returned.premierLeague &&
            //    returned.faCup &&
            //    returned.leagueCup &&
            //    returned.topScorers) {
                success(result);
            //}
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
                result.premierLeague = table.query();
                result.topScorers = topScorers.query();
                returnResult(success, error);
                /*
                result.premierLeague = table.query(null, function() {
                    returned.premierLeague = true;
                    returnResult(success, error);
                });
                result.topScorers = topScorers.query(null, function() {
                    returned.topScorers = true;
                    returnResult(success, error);
                });
                */
            }
        };
    });