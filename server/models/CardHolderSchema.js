let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CardHolderSchema = new Schema (
    {
        cardHolderName : String,
        cardHolderNumber : Number,
        cardNumber : {type : Number, unique : true},
        cardHolderZipCode : String,
    }
)

module.exports = mongoose.model('cardHolder200421', CardHolderSchema);