const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const salonRoutes = require('./routes/salons');
const bookingRoutes = require('./routes/bookings');
const productRoutes = require('./routes/products');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/salons', salonRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/products', productRoutes);

app.post('/api/contact', (req, res) => {
  // Hier würde normalerweise Brevo oder ein anderer E-Mail-Dienst integriert werden
  res.json({ message: 'Nachricht empfangen' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
