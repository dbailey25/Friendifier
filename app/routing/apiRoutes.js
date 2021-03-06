var friendPool = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    var newUser = (req.body);
    var scoreComparisons = [];

var userScores = newUser.scores;

  // compare newUser's score array to each potential friend
    for (var i = 0; i < friendPool.length; i++) {
      var totalDifference = 0;
      // compare each score
      for (var j = 0; j < friendPool[i].scores.length; j++) {
        totalDifference += Math.abs(friendPool[i].scores[j] - userScores[j]);
      } // close loop, compare scores
      scoreComparisons.push(totalDifference);
    }; // close loop, compare score arrays

  // determine the index of the smallest totalDifference
    var bestMatchIndex = 0;
    var score0 = scoreComparisons[0];
    for (var k = 0; k < scoreComparisons.length; k++) {
      if (scoreComparisons[k] <= score0) {
        score0 = scoreComparisons[k];
        bestMatchIndex = k;
      } // close if
    } // close loop

  // return the data for the best match
    res.json(friendPool[bestMatchIndex]);

  // push new user to friend array\
    friendPool.push(newUser);
  });
};
