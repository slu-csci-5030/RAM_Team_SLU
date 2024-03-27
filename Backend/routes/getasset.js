import express from 'express';
import { equip } from '../models/equipment.js'; // Assuming this is your Mongoose model for equipment

const router = express.Router();

router.get('/api/assets', async (req, res) => {
  try {
    const data = await equip.find({});
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
