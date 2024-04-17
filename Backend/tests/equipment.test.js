import mongoose from 'mongoose';
import express from 'express';
import request from 'supertest';
import { equipmentModel } from '../models/equipmentAsset.js';
import equipmentRouter from '../routes/equipment.js';
jest.mock('../models/equipmentAsset.js');

describe('Equipment Asset Model', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/api/equipment', equipmentRouter);
  });

  afterAll(async () => {
    jest.resetAllMocks();
  });

  test('should create a new equipment asset', async () => {
    const newAsset = {
      Category: 'Database',
      name: 'Test Database',
      description: 'This is a test database',
      'additional-name': 'Test DB',
      'coded-in': 'Python',
      contacts: 'Person 1',
    };

    const createdAsset = {
      _id: new mongoose.Types.ObjectId(),
      Category: 'Database',
      name: 'Test Database',
      description: 'This is a test database',
      'additional-name': 'Test DB',
      'coded-in': 'Python',
      contacts: 'Person 1',
    };

    equipmentModel.create.mockResolvedValue(createdAsset);

    const response = await request(app)
      .post('/api/equipment')
      .send(newAsset);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id', createdAsset._id.toString());
    expect(response.body.Category).toBe('Database');
    expect(response.body.name).toBe('Test Database');
    expect(response.body.description).toBe('This is a test database');
    expect(response.body['additional-name']).toBe('Test DB');
    expect(response.body['coded-in']).toBe('Python');
    expect(response.body.contacts).toBe('Person 1');
  });

  test('should not create a new equipment asset without required fields', async () => {
    const newAsset = {
      // Missing required fields
      name: 'Test Database',
      description: 'This is a test database',
      'additional-name': 'Test DB',
      'coded-in': 'Python',
    };

    const response = await request(app)
      .post('/api/equipment')
      .send(newAsset);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Please provide all the required fields');
  });

  test('should return 500 Internal Server Error when creating a new equipment asset fails', async () => {
    const newAsset = {
      Category: 'Database',
      name: 'Test Database',
      description: 'This is a test database',
      'additional-name': 'Test DB',
      'coded-in': 'Python',
      contacts: 'Person 1',
    };

    const errorMessage = 'Internal Server Error';
    equipmentModel.create.mockRejectedValue(new Error(errorMessage));

    const response = await request(app)
      .post('/api/equipment')
      .send(newAsset);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe(errorMessage);
  });

  test('should return all equipment assets', async () => {
    const mockAssets = [
      {
        _id: new mongoose.Types.ObjectId(),
        Category: 'Database',
        name: 'Test Database',
        description: 'This is a test database',
        'additional-name': 'Test DB',
        'coded-in': 'Python',
        contacts: 'Person 1',
      },
      {
        _id: new mongoose.Types.ObjectId(),
        Category: 'Software',
        name: 'Test Software',
        description: 'This is a test software',
        'additional-name': 'Test SW',
        'coded-in': 'JavaScript',
        contacts: 'Person 2',
      },
    ];

    equipmentModel.find.mockResolvedValue(mockAssets);

    const response = await request(app).get('/api/equipment');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('count', mockAssets.length);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data.length).toBe(mockAssets.length);
  });

  test('should not return assets if there are none in the database', async () => {
    equipmentModel.find.mockResolvedValue([]);

    const response = await request(app).get('/api/equipment');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('count', 0);
    expect(response.body).toHaveProperty('data', []);
  });

  test('should return 500 Internal Server Error when retrieving all equipment assets fails', async () => {
    const errorMessage = 'Internal Server Error';
    equipmentModel.find.mockRejectedValue(new Error(errorMessage));

    const response = await request(app).get('/api/equipment');

    expect(response.status).toBe(500);
    expect(response.body.message).toBe(errorMessage);
  });

});