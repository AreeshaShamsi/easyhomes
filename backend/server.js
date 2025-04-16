const express = require('express');
const cors = require('cors');
const firebaseAdmin = require('firebase-admin');
const path = require('path');
require('dotenv').config(); // Load env variables

const app = express();
const port = 3000;

// Initialize Firebase Admin SDK using env variables
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  }),
});

const db = firebaseAdmin.firestore();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
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
