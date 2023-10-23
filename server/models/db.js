const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const {DB_HOST, DB_NAME} = process.env;
main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`);
    console.log('DeHangover connected to db')
}

module.exports = mongoose;