const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const userRoutes = require('./routes/userRoutes');
const drinkRoutes = require('./routes/drinkRoutes');
const hangoverRoutes = require('./routes/hangoverRoutes');
const typeRoutes = require('./routes/typeRoutes')

app.use('/api', userRoutes);
app.use('/api', drinkRoutes)
app.use('/api', hangoverRoutes);
app.use('/api', typeRoutes)


app.listen(PORT, () => {
    console.log(`we're chilling at port ${PORT}`)
})
