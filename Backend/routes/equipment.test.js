const request = require('supertest');
const express = require('express');

const equipmentRouter = require('./equipmentRouter').default;

const { equipmentModel } = require('../models/equipmentAsset');


// Mock the equipmentModel methods
jest.mock('../models/equipmentAsset');

// Setup Express app and middleware
const app = express();
app.use(express.json());
app.use('/api/equipment', equipmentRouter);

describe('POST /api/equipment', () => {
    it('should return 400 if required fields are missing', async () => {
        const payload = {
            Category: 'Test Category',
            name: 'Test Name',
            // Missing other required fields
        };

        const response = await request(app)
            .post('/api/equipment')
            .send(payload);

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            message: 'Please provide all the required fields',
        });
    });

    it('should return 201 and created asset on successful insert', async () => {
        const mockAsset = {
            _id: 'some_id',
            Category: 'Test Category',
            name: 'Test Name',
            description: 'Test Description',
            'additional-name': 'Additional Name',
            'coded-in': 'Coded In',
            contacts: 'Test Contacts',
        };

        // Mock the create method to return the mockAsset
        equipmentModel.create.mockResolvedValue(mockAsset);

        const payload = {
            Category: 'Test Category',
            name: 'Test Name',
            description: 'Test Description',
            'additional-name': 'Additional Name',
            'coded-in': 'Coded In',
            contacts: 'Test Contacts',
        };

        const response = await request(app)
            .post('/api/equipment')
            .send(payload);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(mockAsset);
    });

    // Add more test cases for other scenarios as needed
});
