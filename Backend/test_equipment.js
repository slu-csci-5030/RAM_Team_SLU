import express from "express";
import request from "supertest";
import mongoose from "mongoose";

import equipmentRouter from "./equipmentRouter";
import { equipmentModel } from "../models/equipmentAsset.js";

const app = express();
app.use(express.json());
app.use("/equipment", equipmentRouter);

jest.mock("../models/equipmentAsset.js");

describe("Equipment Routes", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("POST /equipment", () => {
    it("should return 400 if required fields are missing", async () => {
      const response = await request(app)
        .post("/equipment")
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message");
    });

    it("should create a new asset", async () => {
      const mockAsset = {
        _id: mongoose.Types.ObjectId(),
        category: "Category",
        name: "Name",
        description: "Description",
        additionalName: "Additional Name",
        codedIn: "Coded In",
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

  describe("GET /equipment", () => {
    it("should get all equipment assets", async () => {
      const mockAssets = [
        {
          _id: mongoose.Types.ObjectId(),
          category: "Category 1",
          name: "Asset 1",
          description: "Description 1",
          additionalName: "Additional Name 1",
          codedIn: "Coded In 1",
          contacts: "Contacts 1"
        },
        {
          _id: mongoose.Types.ObjectId(),
          category: "Category 2",
          name: "Asset 2",
          description: "Description 2",
          additionalName: "Additional Name 2",
          codedIn: "Coded In 2",
          contacts: "Contacts 2"
        }
      ];

      equipmentModel.find.mockResolvedValue(mockAssets);

      const response = await request(app).get("/equipment");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockAssets);
    });
  });

  describe("PUT /equipment/:id", () => {
    it("should update an existing equipment asset", async () => {
      const mockAssetId = mongoose.Types.ObjectId();
      const mockAsset = {
        _id: mockAssetId,
        category: "Category",
        name: "Name",
        description: "Description",
        additionalName: "Additional Name",
        codedIn: "Coded In",
        contacts: "Contacts"
      };
        equipmentModel.findByIdAndUpdate.mockResolvedValue(mockAsset);
        const updatedData = {
        category: "Updated Category",
        name: "Updated Name",
        description: "Updated Description",
        additionalName: "Updated Additional Name",
        codedIn: "Updated Coded In",
        contacts: "Updated Contacts"
      };
      const response = await request(app)
        .put(`/equipment/${mockAssetId}`)
        .send(updatedData);
        expect(response.status).toBe(200);
      expect(response.body).toEqual(mockAsset);
    });
  
    it("should return 404 if equipment asset is not found", async () => {
      equipmentModel.findByIdAndUpdate.mockResolvedValue(null);
  
      const response = await request(app)
        .put(`/equipment/${mongoose.Types.ObjectId()}`)
        .send({});
        expect(response.status).toBe(404);
    });
  });
  

});
