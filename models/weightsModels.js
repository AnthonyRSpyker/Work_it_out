const mongoose = require("mongoose")

const Schema = mongoose.Schema;
 
const WeightsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {type:{
            type: String,
            trim: true,
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
},
{
    toJSON: {
        virtuals: true
    }
});

WeightsSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((duration, exercise) => {
        return duration + exercise.duration
    }, 0)
})

const Weights = mongoose.model("Weights", WeightsSchema);

module.exports = Weights;