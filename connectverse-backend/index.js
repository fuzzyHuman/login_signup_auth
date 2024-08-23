const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
require('dotenv').config();
// Connect to database
connectDB();

// Middleware for parsing JSON bodies
app.use(express.json({ extended: false }));
app.use(cors());

// Define routes
app.use('/api/auth', require('./routes/auth'));


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
