const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);

    console.log(
      `DB connected name:-${db.connection.name} host:-${db.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnection;
