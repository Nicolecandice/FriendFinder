//Load dzta
//This links the routes to the data soucre.
// the data souce holds arrays of information on friends.

var friends = require("../data/friends");

//=====================================
//Routing
//=====================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // -------------------------------------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })
};
//===========================================================================================================
app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
   var bestMatch= {
       name: "",
       photo: "",
       totallDiffer: Infinity// Total least difference
   };

   var uData = req.body;
   var uScore = uData.uScore

   var totallDiffer;

   //Loop through all possible matches
    for (var i=0; i<friends.length; i++) {
        var myFriend =friends[i];
        totallDiffer = 0;

        console.log(myFriend.name);

        // loop through all scores
       for (var k =0; k < myfriends.scores.length; k++) {
            var myFriendScore =myFriend.scores[k];
            var userScore = userScores[k];


         totallDiffer += Math.abs(parseInt(myFriendScore)-parseInt(userScore));

    }
    if(totallDiffer <= bestMatch.friendDifference){

    // if match found , match friend to user.
    bestMatch.name = myFriend.name;
    bestMatch.photo = myFriend.photo;
    bestMatch.friendDifference =  totallDiffer;
}
}
//=======================================================================================================
    friends.push(uData);

    res.json(bestMatch); 
}); 


