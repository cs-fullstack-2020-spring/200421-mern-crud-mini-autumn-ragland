let express = require('express');
let router = express.Router();

// router.get('/test', (req,res) => {
//     res.send("TEST");
// });

// display all card holder
router.get('/', (req,res) => {
    res.send('Get All');
});

// display card holder details
router.get('/:cardNumber', (req,res) => {
    res.send(`Get ${req.params.cardNumber}`);
});

// create card holder
router.post('/', (req,res) => {
    res.send('Create One');
});

// update card holder details
router.put('/:cardNumber', (req,res) => {
    res.send(`Update ${req.params.cardNumber}`);
});

// delete card holder
router.delete('/:cardNumber', (req,res) => {
    res.send(`Delete ${req.params.cardNumber}`);
});

module.exports = router;