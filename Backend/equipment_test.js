import express from "express";
import request from "supertest";
import mongoose from "mongoose";

import userRouter from "./userRouter";
import { userModel } from "../models/user.js";

const app = express();
app.use(express.json());
app.use("/users", userRouter);

jest.mock("../models/user.js");

describe("User Routes", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("POST /users", () => {
    it("should return 400 if required fields are missing", async () => {
      const response = await request(app)
        .post("/users")
        .send({}); // Missing required fields

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message");
    });

    it("should create a new user", async () => {
      const mockUser = {
        _id: mongoose.Types.ObjectId(),
        username: "testuser",
        email: "test@example.com",
        password: "password",
      };

      userModel.create.mockResolvedValue(mockUser);

      const response = await request(app)
        .post("/users")
        .send(mockUser);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(mockUser);
    });
  });

  describe("GET /users", () => {
    it("should get all users", async () => {
      const mockUsers = [
        {
          _id: mongoose.Types.ObjectId(),
          username: "user1",
          email: "user1@example.com",
          password: "password1",
        },
        {
          _id: mongoose.Types.ObjectId(),
          username: "user2",
          email: "user2@example.com",
          password: "password2",
        },
      ];

      userModel.find.mockResolvedValue(mockUsers);

      const response = await request(app).get("/users");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockUsers);
    });
  });

  // Add more test cases as needed for other routes
});
