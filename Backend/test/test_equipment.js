import request from 'supertest';
import app from '../app'; // Assuming your Express app is exported as 'app'
import { equipmentModel } from '../models/equipmentAsset'; // Import your equipment model

describe('Equipment API', () => {
  // Test case for inserting equipment details
  it('should insert new equipment details', async () => {
    // Prepare sample equipment details
    const newEquipment = {
      Category: 'Category',
      name: 'Equipment Name',
      description: 'Equipment Description',
      'additional-name': 'Additional Name',
      'coded-in': 'Coded In',
      contacts: 'Contacts',
    };

    // Send a POST request to the endpoint
    const response = await request(app)
      .post('/equipment') // Assuming '/equipment' is your equipment insertion endpoint
      .send(newEquipment);

    // Expect the response status code to be 201 (Created)
    expect(response.status).toBe(201);

    // Verify that the equipment details are inserted into the database
    const insertedEquipment = await equipmentModel.findOne({ name: 'Equipment Name' });
    expect(insertedEquipment).toBeTruthy();
    expect(insertedEquipment.Category).toBe(newEquipment.Category);
    expect(insertedEquipment.name).toBe(newEquipment.name);
    expect(insertedEquipment.description).toBe(newEquipment.description);
    expect(insertedEquipment['additional-name']).toBe(newEquipment['additional-name']);
    expect(insertedEquipment['coded-in']).toBe(newEquipment['coded-in']);
    expect(insertedEquipment.contacts).toBe(newEquipment.contacts);
  });
});
