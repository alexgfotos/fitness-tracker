const mongoose = require("mongoose");
const Schema = mongoose.Schema;

console.log("We are in the model")

const workoutSchema = new Schema({

    date: {type: Date, default: () => new Date()},
    exercises: [
        {
            type: {
                type: "string",
                trim: true,
                required: "Exercise type required"
            }
            ,
            name: {
                type: "string",
                trim: true,
                required: "Exercise name required"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Exercise duration required"
            },
            weight: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
            },
            sets: {
                type: Number,
                trim: true,
            },
            distance: {
                type: Number,
                trim: true,
            }
        }
    ]
});

console.log(workoutSchema)
// UserSchema.methods.setFullName = function () {
//     this.fullName = `${this.firstName} ${this.lastName}`;

//     return this.fullName;
// };

// UserSchema.methods.lastUpdatedDate = function () {
//     this.lastUpdated = Date.now();

//     return this.lastUpdated;
// };



const Workout = mongoose.model("Workout", workoutSchema);
console.log(Workout)
module.exports = Workout;
