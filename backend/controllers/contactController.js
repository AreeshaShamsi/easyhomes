import { firestore } from 'firebase-admin';
const db = firestore();

const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    await db.collection('contacts').add({
      name,
      email,
      message,
      timestamp: new Date(),
    });

    res.status(200).json({ success: true, message: 'Message submitted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export default { submitContactForm };
