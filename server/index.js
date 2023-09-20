// imports
const express = require('express');
const cors = require('cors');
const router = require('./routes/drinkRoutes');

// instance
const app = express();
const PORT = 4000;

// middleware
app.use(cors());
app.use(express.json());
app.use(router)

// server running
app.listen(PORT, () => {
    console.log(`we're chilling at port ${PORT}`)
})
