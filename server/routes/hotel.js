const { Router } = require('express');
const hotelAdding = require('../controller/hotel');
const getHotel = require('../controller/hotel');
const router = Router();

router.get('/', (req, res) => {
    res.send('hello');
});

router.post('/hotel', hotelAdding());
router.get('/hotels', getHotel());

module.exports = router;
