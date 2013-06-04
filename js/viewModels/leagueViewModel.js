function LeagueViewModel() {
  var self = this;

  self.teams = ko.observableArray([]);

  $.ajax({
    url: "http://api.statsfc.com/premier-league/table.json",
    data: { key: "free" },
    dataType: "jsonp",
    success: function(result) {
      var mappedTeams = $.map(result, function(item) {
        return { name: item.team };
      });
      self.teams(mappedTeams);
    },
    error: function(request, textStatus, errorThrown) {
      console.log("error: " + textStatus);
    },
    complete: function(request, textStatus) {
      console.log("complete: " + textStatus);
    }
  });
};
