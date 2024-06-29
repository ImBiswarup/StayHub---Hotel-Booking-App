const Hotel = require('../model/hotel');

const hotelAdding = () => {
    return async (req, res) => {
        try {
            const { hotelName, imageUrl, hotelAddress } = req.body;

            if (!hotelName || !imageUrl || !hotelAddress) {
                return res.status(400).json({ error: 'hotelName, imageUrl, and hotelAddress are required' });
            }

            const newHotel = new Hotel({
                hotelName,
                imageUrl,
                hotelAddress
            });

            await newHotel.save();
            res.status(201).json(newHotel);
            console.log('Hotel added:', newHotel);
        } catch (error) {
            console.error('Error adding hotel:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

const getHotel = async (req, res) => {
    try {
        const hotels = await Hotel.find({});
        if (!hotels.length) {
            return res.status(404).json({ msg: 'No hotels found' });
        }
        res.status(200).json({ hotels });
    } catch (error) {
        console.error('Error retrieving hotels:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = hotelAdding, getHotel;
