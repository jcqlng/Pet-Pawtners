// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

 

  app.get("/owner", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/owner.html"));
  });

  app.get("/petsitter", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/petsitter.html"));
  });

  // // If no matching route is found default to home
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });
};
