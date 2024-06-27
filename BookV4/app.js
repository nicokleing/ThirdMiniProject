const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const swaggerSetup = require('./swagger');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bookdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/books', bookRoutes);
swaggerSetup(app);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
