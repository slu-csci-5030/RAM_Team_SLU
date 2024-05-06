const express = require('express');
const mongoose = require('mongoose');
const speakeasy = require('speakeasy');
const passwordValidator = require('password-validator');

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/assetDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));


const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },

});

const User = mongoose.model('User', userSchema);

// Define password schema
const passwordSchema = new passwordValidator();
passwordSchema
  .is().min(8)                                   // Minimum length 8
  .is().max(100)                                 // Maximum length 100
  .has().uppercase()                             // Must have uppercase letters
  .has().lowercase()                             // Must have lowercase letters
  .has().digits()                                // Must have digits
  .has().symbols()                               // Must have symbols
  .has().not().spaces()                          // Cannot have spaces

app.post('/login', async (req, res) => {
  const { username, password, otp } = req.body;

  if (!passwordSchema.validate(password)) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    if (user.mfaEnabled) {
      const isValidOTP = speakeasy.totp.verify({
        secret: user.secret,
        encoding: 'base32',
        token: otp,
      });

      if (!isValidOTP) {
        return res.status(401).json({ message: 'Invalid OTP' });
      }
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/assets', async (req, res) => {
  const { name, category } = req.query;

  try {
    let query = {};

    if (name) {
      query.name = { $regex: name, $options: 'i' }; // Case-insensitive search
    }

    if (category) {
      query.category = category;
    }

    // Find assets based on query
    const assets = await Asset.find(query);

    res.status(200).json(assets);
  } catch (error) {
    console.error('Error fetching assets:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
