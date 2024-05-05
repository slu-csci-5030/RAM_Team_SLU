import request from 'supertest';
import app from '../index';

describe("Publication API", () => {
  describe("POST /publications/", () => {
    it("should require all necessary fields", async () => {
      const response = await request(app)
        .post("/publications")
        .send({
          name: "Example Name",
          description: "Example Description",
        });
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe("Please provide all the required fields");
    });

    it("should create a publication with correct data", async () => {
      const response = await request(app)
        .post("/publications")
        .send({
          category: "Science",
          name: "Quantum Modelling",
          description: "Example Description",
          "additional-name": "Optimization of quantum process",
          "coded-in": "Node.js",
          contacts: "Contact Details",
        });
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("_id");
    });
  });

  describe("GET /publications", () => {
    it("should return all publications", async () => {
      const response = await request(app).get("/publications");
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("data");
    });
  });

  describe("GET /publications/:id", () => {
    it("should return a single publication", async () => {
      const publication = await request(app)
        .post("/publications")
        .send({
          category: "Tech",
          name: "Tech Name",
          description: "Tech Description",
          "additional-name": "Tech Extra Name",
          "coded-in": "Python",
          contacts: "Tech Contact",
        });
      const response = await request(app).get(`/publications/${publication.body._id}`);
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("_id");
    });
  });

  describe("DELETE /publications/:id", () => {
    it("should delete the publication", async () => {
      const publication = await request(app)
        .post("/publications")
        .send({
          category: "Dev",
          name: "Dev Name",
          description: "Dev Description",
          "additional-name": "Dev Extra Name",
          "coded-in": "Java",
          contacts: "Dev Contact",
        });
      const deleteResponse = await request(app).delete(`/publications/${publication.body._id}`);
      expect(deleteResponse.statusCode).toBe(200);
      expect(deleteResponse.body).toHaveProperty("_id");
    });

    it("should return 404 if publication is not found", async () => {
      const response = await request(app).delete(`/publications/unknownid`);
      expect(response.statusCode).toBe(404);
      expect(response.body.message).toBe("Publication not found!");
    });
  });
});

