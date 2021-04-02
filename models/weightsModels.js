const mongoose = reguire("mongoose")

const Schema = mongoose.Schema;
 
const WeightsSchema = new Schema({

})

const Weights = mongoose.models("Weights", WeightsSchema);

module.exports = Weights;