//Load dzta
//This links the routes to the data soucre.
// the data souce holds arrays of information on friends.

var friends = require("../data/friends");

//=====================================
//Routing
//=====================================

module.export = function(app) {
    // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res){
      res.json(friends)
  }
)};
//========================================================
app.post("/api/friends", function(req, res) {
// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

}
)
//==============================================================
app.post("/api/clear", function(){
    // Emppty out the arrays of data
    friends = [];
    
    console.log(friends);

});




  