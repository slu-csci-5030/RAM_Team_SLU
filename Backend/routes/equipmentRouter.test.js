const equipmentRouter = require('./equipment.js');
const equipmentModel = require('../models/equipmentAsset.js');


// Mock the request and response objects
const mockRequest = (id) => ({
 params: { id },
});

const mockResponse = () => {
 const res = {};
 res.status = jest.fn().mockReturnValue(res);
 res.send = jest.fn().mockReturnValue(res);
 return res;
};

describe('equipmentRouter DELETE', () => {
 beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();
 });

 it('should delete an asset and return 200 status', async () => {
    const req = mockRequest('123');
    const res = mockResponse();

    // Mock the findByIdAndDelete method to return a value
    equipmentModel.findByIdAndDelete.mockResolvedValue({ _id: '123', name: 'Asset 1' });

    await equipmentRouter.delete('/:id', req, res);

    expect(equipmentModel.findByIdAndDelete).toHaveBeenCalledWith('123');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ _id: '123', name: 'Asset 1' });
 });

 it('should return 404 if asset not found', async () => {
    const req = mockRequest('123');
    const res = mockResponse();

    // Mock the findByIdAndDelete method to return null
    equipmentModel.findByIdAndDelete.mockResolvedValue(null);

    await equipmentRouter.delete('/:id', req, res);

    expect(equipmentModel.findByIdAndDelete).toHaveBeenCalledWith('123');
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Asset not found!' });
 });
});
