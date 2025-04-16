const express = require('express');
const cors = require('cors');
const firebaseAdmin = require('firebase-admin');
const path = require('path');

// Load Firebase credentials
const serviceAccount = require('./realestate.json');

const app = express();
const port = 3000;

// Initialize Firebase Admin SDK
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

const db = firebaseAdmin.firestore();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // adjust if your frontend is hosted elsewhere
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Route for contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    console.log("Received contact data:", req.body); // DEBUG LOG

    await db.collection('contacts').add({
      name,
      email,
      message,
      createdAt: firebaseAdmin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).send({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).send({ success: false, error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at: http://localhost:${port}`);
});
