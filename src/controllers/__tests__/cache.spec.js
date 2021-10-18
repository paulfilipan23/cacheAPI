import { expect } from "chai";

import { app } from "../../server";

describe("GET /v1/cache", () => {
  describe("Success response", () => {
    it.only("Should responde with 200 and some random string", async () => {
      const response = await chai.request(app).get(`v1/cache?key=arya`);

      expect(response.body).to.be.type(string);
    });
  });
});

describe("POST /v1/cache", () => {
  describe("Succcess response", () => {
    it("Should create a new cache", async () => {
      const response = await chai
        .request(app)
        .post(`v1/cache`)
        .send({ key: "johnsnow", data: "gameofthrones" });

      expect(response.body).to.have.property("createdAt");
      expect(response.body).to.have.property("_id");
      expect(response.body.key).to.be("johnsnow");
      expect(response.body.data).to.be("gameofthrones");
    });
  });
});

describe("DELETE /v1/cache", () => {
  describe("Succcess delete", () => {
    it("Should delete a cache", async () => {
      const key = "arya";
      await chai.request(app).get(`v1/cache?key=${key}`);
      const response = await chai.request(app).delete(`v1/cache/${key}`);

      expect(response.status).to.be(200);
      expect(response.body.message).to.be("arya was deleted");
    });
  });

  describe("Failed delete", () => {
    it("Should get a 404 with not found", async () => {
      const key = "arya123";
      const response = await chai.request(app).delete(`v1/cache/${key}`);

      expect(response.status).to.be(404);
      expect(response.body.message).to.be("arya was not found");
    });
  });
});

describe("DELETE /v1/cache-all", () => {
  describe("Succcess delete", () => {
    it("Should delete all cache", async () => {
      const key = "arya";
      const key2 = "arya2";
      await chai.request(app).get(`v1/cache?key=${key}`);
      await chai.request(app).get(`v1/cache?key=${key2}`);
      const response = await chai.request(app).delete(`v1/cache-all`);

      expect(response.status).to.be(200);
      expect(response.body.message).to.be("2 were deleted");
    });
  });
});
