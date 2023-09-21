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
app.use(express.static('public'));

// routes
const userRoutes = require('./routes/userRoutes');
const drinkRoutes = require('./routes/drinkRoutes');
const hangoverRoutes = require('./routes/hangoverRoutes');
const typeRoutes = require('./routes/typeRoutes')

app.use('/api', userRoutes);
app.use('/api', drinkRoutes)
app.use('/api', hangoverRoutes);
app.use('/api', typeRoutes)


// server running
app.listen(PORT, () => {
    console.log(`we're chilling at port ${PORT}`)
})
