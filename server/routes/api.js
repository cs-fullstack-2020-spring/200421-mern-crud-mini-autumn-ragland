let express = require('express');
let router = express.Router();
router.use(express.json());

// router.get('/test', (req,res) => {
//     res.send("TEST");
// });

let cardHolderCollection = require('../models/CardHolderSchema');

// display all card holder
router.get('/', (req,res) => {
    // res.send('Get All');
    cardHolderCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// display card holder details
router.get('/:cardNumber', (req,res) => {
    // res.send(`Get ${req.params.cardNumber}`);
    cardHolderCollection.findOne({cardNumber : req.params.cardNumber}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// create card holder
router.post('/', (req,res) => {
    // res.send('Create One');
    cardHolderCollection.create(req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// update card holder details
router.put('/:cardNumber', (req,res) => {
    // res.send(`Update ${req.params.cardNumber}`);
    cardHolderCollection.findOneAndUpdate({cardNumber : req.params.cardNumber}, req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// delete card holder
router.delete('/:cardNumber', (req,res) => {
    // res.send(`Delete ${req.params.cardNumber}`);
    cardHolderCollection.findOneAndDelete({cardNumber : req.params.cardNumber}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

module.exports = router;