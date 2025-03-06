const express = require('express');
const passport = require('./config/auth');
const apiRoutes = require('./routes/api');
const rateLimiter = require('./middleware/rateLimiter');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use(rateLimiter);

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
