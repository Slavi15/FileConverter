const mongoose = require('mongoose');

const dbConnection = async() => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true })
    .then(() => {
        console.log('MongoDB connection established!');
    })
    .catch(err => {
        console.log(err);
    })
}

export default dbConnection;