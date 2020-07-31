// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/owners/", function (req, res) {


  });

  // Get route for returning matching sitters of a specific category
  app.get("/api/sitters/state/:state/city/:city/duration/:duration/quantity/:quantity/size/:size/temperament/:temperament", function (req, res) {
    db.Sitter.findAll({
      where: {
        state: req.params.state,
        city: req.params.city,
        duration: req.params.duration,
        quantity: req.params.quantity,
        size: req.params.size,
        temperament: req.params.temperament,
      }

    })
      .then(function (dbSitters) {
        res.json(dbSitters);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {

  });


  //Logic to create owners and return matching sitters
  app.post("/api/owner", function (req, res) {
    //    res.json(req.body);
    db.Owner.create({
      name: req.body.name,
      photo: req.body.photo,
      city: req.body.city,
      state: req.body.state,
      email: req.body.email,
      duration: req.body.duration,
      quantity: req.body.quantity,
      size: req.body.size,
      temperament: req.body.temperament,
    })
      .then(function (dbOwner) {
        db.Sitter.findAll({
          where: {
            state: dbOwner.state,
            city: dbOwner.city,
            duration: dbOwner.duration,
            quantity: dbOwner.quantity,
            size: dbOwner.size,
            temperament: dbOwner.temperament,
          }

        })
          .then(function (dbSitters) {
            res.json(dbSitters);
          });
      });
  });

  //Logic to create sitter and return matching owners
  app.post("/api/sitter", function (req, res) {
    //    res.json(req.body);
    db.Sitter.create({
      name: req.body.name,
      photo: req.body.photo,
      city: req.body.city,
      state: req.body.state,
      email: req.body.email,
      duration: req.body.duration,
      quantity: req.body.quantity,
      size: req.body.size,
      temperament: req.body.temperament,
    })
      .then(function (dbSitter) {
        db.Owner.findAll({
          where: {
            state: dbSitter.state,
            city: dbSitter.city,
            duration: dbSitter.duration,
            quantity: dbSitter.quantity,
            size: dbSitter.size,
            temperament: dbSitter.temperament,
          }

        })
          .then(function (dbOwners) {
            res.json(dbOwners);
          });
      });
  });

};
