// create ref to base Schema
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create Model Schema
let CardHolderSchema = new Schema (
    {
        cardHolderName : String,
        cardHolderNumber : Number,
        cardNumber : {type : Number, unique : true},
        cardHolderZipCode : Number,
    }
)

// export model as cardHolder200421 collection
module.exports = mongoose.model('cardHolder200421', CardHolderSchema);