var db = require("../models/workoutModel");

module.exports = function(app) {
  app.get("/api/workout", function(req, res) {
    db.workout.find({}).then(function(dbWorkout) {
      res.json(dbWorkouts);
    });
  });

  app.put("/api/images/:id", function(req, res) {
    db.Exercise.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
      res.json(dbImage);
    });
  });
};
