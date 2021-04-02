const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });



//api routes
app.post("/api/workouts", (req, res) => {
db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout)
        console.log(dbWorkout);
    })
    .catch(err => {
        console.log(err)
    });
});

app.listen(PORT, () => {
    console.log(`We be listnen' on port ${PORT}!`)
});
