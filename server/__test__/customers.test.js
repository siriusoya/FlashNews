const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { hashPassword } = require("../helpers/bcryptjs");

beforeAll(async () => {
  await sequelize.queryInterface.bulkInsert("Customers", [
    {
      email: "customer1@gmail.com",
      password: hashPassword("rahasia"),
      role: "Customer",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: "customer2@gmail.com",
      password: hashPassword("janganlupa"),
      role: "Customer",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      email: "customer3@gmail.com",
      password: hashPassword("inijuga"),
      role: "Customer",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Customers", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  });
});

describe("POST /customers/signup", () => {
  test("should create new customer and return 201", async () => {
    const bodyData = {
      email: "example@mail.com",
      password: "secret",
    };

    const response = await request(app)
      .post("/customers/signup")
      .send(bodyData);

    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty(
      "message",
      "Succeeded registering a new customer"
    );
    expect(response.body.data).toHaveProperty("id", expect.any(Number));
    expect(response.body.data).toHaveProperty("email", bodyData.email);
  });

  test("should fail for sending request without email and return 400", async () => {
    const bodyData = {
      email: null,
      password: "secret",
    };

    const response = await request(app)
      .post("/customers/signup")
      .send(bodyData);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Email is required!");
  });

  test("should fail for sending request without password and return 400", async () => {
    const bodyData = {
      email: "example@mail.com",
      password: null,
    };

    const response = await request(app)
      .post("/customers/signup")
      .send(bodyData);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Password is required!");
  });

  test("should fail for sending email with empty string and return 400", async () => {
    const bodyData = {
      email: "",
      password: "secret",
    };

    const response = await request(app)
      .post("/customers/signup")
      .send(bodyData);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Email is required!");
  });

  test("should fail for sending password with empty string and return 400", async () => {
    const bodyData = {
      email: "example@mail.com",
      password: "",
    };

    const response = await request(app)
      .post("/customers/signup")
      .send(bodyData);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Password is required!");
  });

  test("should fail for sending email that has been registered and return 400", async () => {
    const bodyData = {
      email: "customer1@gmail.com",
      password: "rahasia",
    };

    const response = await request(app)
      .post("/customers/signup")
      .send(bodyData);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "message",
      "Email has been registered!"
    );
  });

  test("should fail for sending password with invalid format and return 400", async () => {
    const bodyData = {
      email: "not an email",
      password: "secret",
    };

    const response = await request(app)
      .post("/customers/signup")
      .send(bodyData);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Invalid email format!");
  });
});

describe("POST /customers/login", () => {
  test("should let customer login and return 200", async () => {
    const bodyData = {
      email: "customer1@gmail.com",
      password: "rahasia",
    };

    const response = await request(app).post("/customers/login").send(bodyData);

    console.log(response.body, "<<<");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty("message", "Login successful");
    expect(response.body).toHaveProperty("access_token", expect.any(String));
    expect(response.body).toHaveProperty("email", bodyData.email);
  });

  test("should fail for sending wrong password and return 401", async () => {
    const bodyData = {
      email: "customer1@gmail.com",
      password: "password salah",
    };

    const response = await request(app).post("/customers/login").send(bodyData);

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty(
      "message",
      "Email or password is invalid"
    );
  });

  test("should fail for sending unregistered email and return 401", async () => {
    const bodyData = {
      email: "emailasal@gmail.com",
      password: "password",
    };

    const response = await request(app).post("/customers/login").send(bodyData);

    expect(response.status).toBe(401);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty(
      "message",
      "Email or password is invalid"
    );
  });
});
