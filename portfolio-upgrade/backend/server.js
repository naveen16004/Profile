const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('Connection Error:', err));

// Schema (Matches your original table columns: name, email, subject, message)
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  created_at: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Your original /api/messages route
app.post('/api/messages', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message saved!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));