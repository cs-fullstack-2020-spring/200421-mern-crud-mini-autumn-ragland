// create router
let express = require('express');
let router = express.Router();
router.use(express.json());

// // test route
// router.get('/test', (req,res) => {
//     res.send("TEST");
// });

// import mongoose model
let cardHolderCollection = require('../models/CardHolderSchema');

// display all card holders
router.get('/', (req,res) => {
    // res.send('Get All'); // test endpoint
    cardHolderCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// display one card holder's details
router.get('/:cardNumber', (req,res) => {
    // res.send(`Get ${req.params.cardNumber}`); // test endpoint
    cardHolderCollection.findOne({cardNumber : req.params.cardNumber}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// create card holder
router.post('/', (req,res) => {
    // res.send('Create One'); // test endpoint
    cardHolderCollection.create(req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// update one card holder's details
router.put('/:cardNumber', (req,res) => {
    // res.send(`Update ${req.params.cardNumber}`); // test endpoint
    cardHolderCollection.findOneAndUpdate({cardNumber : req.params.cardNumber}, req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// delete one card holder
router.delete('/:cardNumber', (req,res) => {
    // res.send(`Delete ${req.params.cardNumber}`); // test endpoint
    cardHolderCollection.findOneAndDelete({cardNumber : req.params.cardNumber}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

//  export route module
module.exports = router;