"use strict";

angular.module("pp-services", ["ngResource"]).
    factory("table", function($resource) {
        return $resource("http://api.statsfc.com/premier-league/table.json",
                         { key: "free", callback: "JSON_CALLBACK" },
                         { query: { method: "JSONP", isArray: true } });
});