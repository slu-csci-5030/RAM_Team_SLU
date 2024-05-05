
const express = require('express')
const User = require('./User.cjs');
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5555

const dbURI = "mongodb+srv://mdrohitreddy:mdrohitreddy@cluster0.bzga5vf.mongodb.net/";

const connectToDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

connectToDB();


app.get("/", (req, res) => {
	res.send("<h1>Hello, RAM Team!</h1>");
});


app.post('/createuser', [
  //body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    //Check whether the user with this email exists already
    let success = false;
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
      success = false
    }

    // Create a new user
    user = await User.create({
      //name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    const data = {
      user: {
        id: user.id
      }
    }
    success = true

    // res.json(user)
    res.json({ data })

  } catch (error) {
    success = false
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

app.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    if (password != user.password) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    success = true;
    res.json({ success, data })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
	console.log(`Check http://localhost:${PORT}`);
});
