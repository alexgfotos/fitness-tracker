const db = require("../models");
const router = require("express").Router();
const mongojs = require("mongojs");


router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    })
})

router.get("/api/workouts/range", (req, res) => {
  let date = new Date().setDate(new Date().getDate()-7)
  console.log("getting range for" + date);

  db.Workout.find({ day: { $gte: date } })
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    })
})

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    })
})

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.update(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    {
      $push: {
        exercises: req.body
      }
    },

    (error, changed) => {
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        console.log(changed);
        res.send(changed);
      }
    }
)
})




module.exports = router;