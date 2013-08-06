"use strict";

angular.module("pp-services", ["ngResource"]).
    factory("table", function($resource) {
        return $resource("http://api.statsfc.com/premier-league/table.json",
                         { key: "free", callback: "JSON_CALLBACK" },
                         { query: { method: "JSONP", isArray: true } });
    }).
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
    });