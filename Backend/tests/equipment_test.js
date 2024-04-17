import express from "express";
import request from "supertest"; // Supertest is used for making HTTP requests in tests
import mongoose from "mongoose"; // If using MongoDB with Mongoose

import equipmentRouter from "./equipmentRouter"; // Import the router
import { equipmentModel } from "../models/equipmentAsset.js";

// Create a mock express app to use with supertest
const app = express();
app.use(express.json());
app.use("/equipment", equipmentRouter);

// Mock the MongoDB connection using jest.mock for equipmentModel
jest.mock("../models/equipmentAsset.js");

describe("Equipment Routes", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("POST /equipment", () => {
    it("should return 400 if required fields are missing", async () => {
      const response = await request(app)
        .post("/equipment")
        .send({}); // Missing required fields

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message");
    });

    it("should create a new asset", async () => {
      const mockAsset = {
        _id: mongoose.Types.ObjectId(),
        Category: "Category",
        name: "Name",
        description: "Description",
        "additional-name": "Additional Name",
        "coded-in": "Coded In",
        contacts: "Contacts"
      };

      equipmentModel.create.mockResolvedValue(mockAsset);

      const response = await request(app)
        .post("/equipment")
        .send(mockAsset);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(mockAsset);
    });
  });

  // Add tests for other routes similarly
});
