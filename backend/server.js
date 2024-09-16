const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');
const dbConnect = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
dbConnect();

// Routes
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
