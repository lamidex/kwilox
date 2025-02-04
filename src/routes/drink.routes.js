const express = require('express');
const {save_drink, get_drink, update_drink} = require('../controllers/user.controller');
const router = express.Router();


router.post('/save', save_drink)
router.get('/get', get_drink)
router.put('/update/:id', update_drink)




module.exports = router;