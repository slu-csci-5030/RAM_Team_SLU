import mongoose from 'mongoose';

const EquipmentSchema = new mongoose.Schema({
  name: String,
  type: String,
  status: String,
  location: String,
  specifications: Object,
  lastMaintenance: Date,
});

const equip = mongoose.model('equip', EquipmentSchema);

export { equip}; // Export the Equipment class

