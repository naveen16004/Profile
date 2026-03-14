require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // This line was missing or misplaced
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Local MongoDB Connected!"))
  .catch(err => console.error("❌ Connection Error:", err));

// Schema using mixed case
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  created_at: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// POST route
app.post('/api/messages', async (req, res) => {
  // This log helps you see exactly what the frontend is sending
  console.log("Data received from frontend:", req.body);
  
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message saved!' });
  } catch (error) {
    console.error("Save Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));