// imports
const express = require('express');
const cors = require('cors');
// const router = require('./routes/router');

// instance
const app = express();
const PORT = 4000;

// middleware
app.use(cors());
app.use(express.json());

// routes
const userRoutes = require('./routes/userRoutes');
const drinkRoutes = require('./routes/drinkRoutes');
app.use('/api', userRoutes);
app.use('/api', drinkRoutes)

// server running
app.listen(PORT, () => {
    console.log(`we're chilling at port ${PORT}`)
})