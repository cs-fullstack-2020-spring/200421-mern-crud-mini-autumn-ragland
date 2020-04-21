let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CardHolderSchema = new Schema (
    {
        cardHolderName : String,
        cardHolderNumber : Number,
        cardNumber : {type : Number, unique : true},
        cardHolderAddress : {
            streetName : String,
            zipCode : Number,
            state : String
        }
    }
)

module.exports = mongoose.model('cardHolder200421', CardHolderSchema);