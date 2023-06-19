const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { signToken } = require("../helpers/jwtCustomer");
const { hashPassword } = require("../helpers/bcryptjs");
const { Customer, Article } = require("../models");

let validToken;
const invalidToken = "tydacvalid";

const customerTest = {
  email: "user@mail.com",
  password: hashPassword("rahasia"),
  role: 'Customer'
};

beforeAll(async () => {
  await sequelize.queryInterface.bulkInsert("Categories", [
    {
      name: "Entertainment",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Politics",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Health",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Economy",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Sport",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Education",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  await sequelize.queryInterface.bulkInsert("Users", [
    {
      username: "admin1",
      email: "admin1@gmail.com",
      password: "password",
      role: "Admin",
      phoneNumber: "6658372523",
      address: "216 Kings Way",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "staff1",
      email: "staff1@gmail.com",
      password: "password",
      role: "Staff",
      phoneNumber: "3788209077",
      address: "8 Ludington Plaza",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "clane2",
      email: "rprobart0@miibeian.gov.cn",
      password: "5d3pNS",
      role: "Admin",
      phoneNumber: "5377985608",
      address: "04263 Dakota Street",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "hvalasek3",
      email: "fhadden1@dedecms.com",
      password: "WTLLBQ",
      role: "Staff",
      phoneNumber: "9165763490",
      address: "0 Dwight Point",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "tluck4",
      email: "bclousley2@tinypic.com",
      password: "nWQLDLLpnymt",
      role: "Admin",
      phoneNumber: "6808447880",
      address: "61 Hazelcrest Terrace",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  await sequelize.queryInterface.bulkInsert("Articles", [
    {
      title: "Fake Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: "hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      authorId: 3,
      categoryId: 2,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
      authorId: 4,
      categoryId: 1,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: "hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      authorId: 3,
      categoryId: 2,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
      authorId: 4,
      categoryId: 1,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: "hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      authorId: 3,
      categoryId: 2,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
      authorId: 4,
      categoryId: 1,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 7",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: "hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      authorId: 3,
      categoryId: 2,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 8",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
      authorId: 4,
      categoryId: 1,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 9",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: "hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      authorId: 3,
      categoryId: 2,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 10",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
      authorId: 4,
      categoryId: 1,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 11",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: "hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      authorId: 3,
      categoryId: 2,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 12",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
      authorId: 4,
      categoryId: 1,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 13",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: "hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      authorId: 3,
      categoryId: 2,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 14",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
      authorId: 4,
      categoryId: 1,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 15",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: "hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      authorId: 3,
      categoryId: 2,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 16",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
      authorId: 4,
      categoryId: 1,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 17",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: "hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      authorId: 3,
      categoryId: 2,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 18",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
      authorId: 4,
      categoryId: 1,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 19",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: "hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      authorId: 3,
      categoryId: 2,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Fake Title 20",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl:
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
      authorId: 4,
      categoryId: 1,
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  let result = await Customer.create(customerTest);

  validToken = signToken({
    id: result.id
  });

});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Categories", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  });

  await sequelize.queryInterface.bulkDelete("Users", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  });

  await sequelize.queryInterface.bulkDelete("Articles", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  });

  await sequelize.queryInterface.bulkDelete("Customers", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  });
});

test("GET /customers/articles should get active articles and return 200", async () => {
  const response = await request(app).get("/customers/articles");

  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body).toHaveProperty(
    "message",
    "Succeeded getting articles data"
  );
  expect(response.body).toHaveProperty("data", expect.any(Array));
  expect(response.body).toHaveProperty("currentPage", null);
  expect(response.body).toHaveProperty("totalData", expect.any(Number));
  expect(response.body).toHaveProperty("totalPage", expect.any(Number));
});

test("GET /customers/articles should get active articles with search filter and return 200", async () => {
  const response = await request(app).get("/customers/articles?search=cara");

  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body).toHaveProperty(
    "message",
    "Succeeded getting articles data"
  );
  expect(response.body).toHaveProperty("data", expect.any(Array));
  expect(response.body).toHaveProperty("currentPage", null);
  expect(response.body).toHaveProperty("totalData", expect.any(Number));
  expect(response.body).toHaveProperty("totalPage", expect.any(Number));
});

test("GET /customers/articles should get active articles by page and return 200", async () => {
  const response = await request(app).get("/customers/articles?page=1");

  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body).toHaveProperty(
    "message",
    "Succeeded getting articles data"
  );
  expect(response.body).toHaveProperty("data", expect.any(Array));
  expect(response.body).toHaveProperty("currentPage", expect.any(Number));
  expect(response.body).toHaveProperty("totalData", expect.any(Number));
  expect(response.body).toHaveProperty("totalPage", expect.any(Number));
});

test("GET /customers/articles should get article detail and return 200", async () => {
  const response = await request(app).get("/customers/articles/1");

  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body).toHaveProperty(
    "message",
    "Succeeded getting article data"
  );
  expect(response.body).toHaveProperty("data", expect.any(Object));
  expect(response.body).toHaveProperty("qrCode", expect.any(String));
});

test("should fail for requesting invalid article id and return 404", async () => {
  const response = await request(app).get("/customers/articles/99");

  expect(response.status).toBe(404);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body).toHaveProperty("message", "Article not found");

  
});

test("GET /bookmark should get bookmarks and return 200", async () => {
  const response = await request(app)
  .get("/customers/bookmark")
  .set('access_token', validToken)

  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body).toHaveProperty(
    "message",
    "Succeeded getting bookmarks data"
  );
  expect(response.body).toHaveProperty("data", expect.any(Array));
});

test("GET /bookmark/:id should added a new bookmark and return 201", async () => {
  const response = await request(app)
  .post("/customers/bookmark/1")
  .set('access_token', validToken)

  expect(response.status).toBe(201);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body).toHaveProperty(
    "message",
    "Succeeded adding a new bookmark"
  );
  expect(response.body).toHaveProperty("data", expect.any(Object));
});

test("GET /bookmark/:id should fail for requesting invalid article id and return 404", async () => {
  const response = await request(app)
  .post("/customers/bookmark/100")
  .set('access_token', validToken)

  expect(response.status).toBe(404);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body).toHaveProperty(
    "message",
    "Article not found"
  );
});

test("GET /bookmark should get bookmarks and return 200", async () => {
  const response = await request(app)
  .get("/customers/bookmark")

  expect(response.status).toBe(401);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body).toHaveProperty(
    "message",
    "Unauthenticated"
  );
});

test("GET /bookmark should get bookmarks and return 200", async () => {
  const response = await request(app)
  .get("/customers/bookmark")
  .set('access_token', invalidToken)

  expect(response.status).toBe(401);
  expect(response.body).toBeInstanceOf(Object);
  expect(response.body).toHaveProperty(
    "message",
    "Unauthenticated"
  );
});