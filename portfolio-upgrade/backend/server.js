require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Local MongoDB Connected!"))
  .catch(err => console.error("❌ Connection Error:", err));

// Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  created_at: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// POST route with Email Notification
app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Data received:", req.body);

  try {
    // 1. Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // 2. Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sends to yourself
      subject: `New Portfolio Message from ${name}`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    
    res.status(201).json({ success: true, message: 'Saved and Email Sent!' });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(5000, () => console.log(`🚀 Server running on port 5000`));