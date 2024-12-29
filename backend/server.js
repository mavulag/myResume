// Import required dependencies
const express = require('express'); // NodeJS Framework
const mongoose = require('mongoose'); // MongoDB 
const bodyParser = require('body-parser'); // To allow to pass json data
const cors = require('cors'); // To allow backend to communicate with frontend
require('dotenv').config(); // To load data from .env file

// Initialize express framework
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const headerRoutes = require('./routes/header');

// Use Routes
app.use('/myResume/v1.0.0/api/headers', headerRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));