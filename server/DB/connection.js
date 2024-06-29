const mongoose = require('mongoose');

const connectToDatabase = (url) => {
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch(err => {
            console.error('Connection error', err);
            process.exit(1);
        });
}

module.exports = connectToDatabase;
