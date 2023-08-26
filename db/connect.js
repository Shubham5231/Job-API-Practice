const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000,
    },
  });
};

module.exports = connectDB;