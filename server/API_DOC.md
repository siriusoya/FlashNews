# Flash API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /articles`
- `POST /articles`
- `GET /articles/:id`
- `DELETE /articles/:id`
- `GET /categories`
- `GET /histories`
- `POST /customers/signup`
- `POST /customers/login`
- `POST /customers/google-sign-in`
- `GET /customers/articles`
- `POST /customers/bookmark/:articleId`
- `GET /customers/bookmark`
- `GET /customers/articles/:id`

&nbsp;

## 1. POST /register

Description:
- Create a new user data

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required!"
}
OR
{
  "message": "Invalid email format!"
}
OR
{
  "message": "Email has been registered!"
}
OR
{
  "message": "Password is required!"
}
OR
{
  "message": "Password length must be more than 5!"
}
```

&nbsp;

## 2. POST /login

Description:
- Give authentication to registered user

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required!"
}
OR
{
  "message": "Password is required!"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password!"
}
```

&nbsp;

## 3. GET /articles

Description:
- Get all articles from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "message": "Succeeded getting articles data",
    "data": [
        {
            "id": 1,
            "title": "Famous Actor Caught in Hilarious Prank on Movie Set",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "imgUrl": "1994-11-06T00:00:00.000Z",
            "authorId": 1,
            "categoryId": 1,
            "createdAt": "2023-05-18T10:39:51.379Z",
            "updatedAt": "2023-05-18T10:39:51.379Z",
            "User": {
                "id": 1,
                "username": "admin1",
                "email": "admin1@gmail.com",
                "role": "Admin",
                "phoneNumber": "6658372523",
                "address": "216 Kings Way",
                "createdAt": "2023-05-18T10:39:51.363Z",
                "updatedAt": "2023-05-18T10:39:51.363Z"
            }
        },
        {
            "id": 2,
            "title": "Pop Star's Surprise Album Release Shakes Up the Music Industry",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "imgUrl": "1994-11-06T00:00:00.000Z",
            "authorId": 2,
            "categoryId": 1,
            "createdAt": "2023-05-18T10:39:51.379Z",
            "updatedAt": "2023-05-18T10:39:51.379Z",
            "User": {
                "id": 2,
                "username": "staff1",
                "email": "staff1@gmail.com",
                "role": "Staff",
                "phoneNumber": "3788209077",
                "address": "8 Ludington Plaza",
                "createdAt": "2023-05-18T10:39:51.363Z",
                "updatedAt": "2023-05-18T10:39:51.363Z"
            }
        }
        ...,
    ]
}
```

&nbsp;

## 4. POST /articles

Description:
- Create a new article data

Request:

- body:

```json
{
  "title": "string",
  "content": "string",
  "imgUrl": "string",
  "authorId": "integer",
  "categoryId": "integer"
}
```

_Response (201 - Created)_

```json
{
    "message": "Succeeded adding a new article",
    "data": {
        "id": "integer",
        "title": "string",
        "content": "string",
        "imgUrl": "string",
        "categoryId": "integer",
        "authorId": "integer",
        "updatedAt": "date",
        "createdAt": "date"
    }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Title is required!"
}
OR
{
  "message": "Content is required!"
}
```

&nbsp;

## 5. GET /articles/:id

Description:
- Get article data by id

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "message": "Succeeded getting article data",
    "data": {
        "id": "integer",
        "title": "string",
        "content": "string",
        "imgUrl": "string",
        "authorId": "integer",
        "categoryId": "integer",
        "updatedAt": "date",
        "createdAt": "date"
    }
}
```

&nbsp;

## 6. DELETE /articles/:id

Description:
- Delete article by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "message": "Article has been deleted",
    "data": {
        "id": "integer",
        "title": "string",
        "content": "string",
        "imgUrl": "string",
        "authorId": "integer",
        "categoryId": "integer",
        "updatedAt": "date",
        "createdAt": "date"
    }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Article not found"
}
```

&nbsp;

## 7. GET /categories

Description:
- Get all categories from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "message": "Succeeded getting categories data",
    "data": [
        {
            "id": 1,
            "name": "Entertainment",
            "createdAt": "2023-05-18T10:39:51.337Z",
            "updatedAt": "2023-05-18T10:39:51.337Z"
        },
        {
            "id": 2,
            "name": "Politics",
            "createdAt": "2023-05-18T10:39:51.337Z",
            "updatedAt": "2023-05-18T10:39:51.337Z"
        },
        {
            "id": 3,
            "name": "Health",
            "createdAt": "2023-05-18T10:39:51.337Z",
            "updatedAt": "2023-05-18T10:39:51.337Z"
        },
        {
            "id": 4,
            "name": "Economy",
            "createdAt": "2023-05-18T10:39:51.337Z",
            "updatedAt": "2023-05-18T10:39:51.337Z"
        },
        {
            "id": 5,
            "name": "Sport",
            "createdAt": "2023-05-18T10:39:51.337Z",
            "updatedAt": "2023-05-18T10:39:51.337Z"
        },
        {
            "id": 6,
            "name": "Education",
            "createdAt": "2023-05-18T10:39:51.337Z",
            "updatedAt": "2023-05-18T10:39:51.337Z"
        }
    ]
}
```

&nbsp;

## 8. GET /histories

Description:
- Get all histories from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "message": "Succeeded getting histories data",
    "data": [
        {
            "id": 1,
            "title": "Underdog Team Shocks the World, Wins Championship Against All Odds",
            "description": "Article with id 9 updated",
            "updatedBy": "admintest@gmail.com",
            "createdAt": "2023-05-25 19:31:52.599 +0700",
            "updatedAt": "2023-05-25 19:31:52.599 +0700"
        },
        {
            "id": 2,
            "title": "University Admissions Scandal Exposed: Elite Institutions Under Scrutiny",
            "description": "Article with 12 status has been updated from Active to Inactive",
            "updatedBy": "admintest@gmail.com",
            "createdAt": "2023-05-25 19:31:52.599 +0700",
            "updatedAt": "2023-05-25 19:31:52.599 +0700"
        },
        ...
    ]
}
```

&nbsp;

## 9. PUT /articles/:id

Description:
- Edit article by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "message": "Article has been edited"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Article not found"
}
```

&nbsp;

## 10. PATCH /articles/:id

Description:
- Update article status by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "message": "Succeeded updating article status"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Article not found"
}
```

&nbsp;

## 11. POST /customers/signup

Description:
- Create a new customer data

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required!"
}
OR
{
  "message": "Invalid email format!"
}
OR
{
  "message": "Email has been registered!"
}
OR
{
  "message": "Password is required!"
}
OR
{
  "message": "Password length must be more than 5!"
}
```

## 12. POST /customers/login

Description:
- Give authentication to registered customer

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required!"
}
OR
{
  "message": "Password is required!"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password!"
}
```

## 13. GET /customers/articles

Description:
- Get all active articles from database

_Response (200 - OK)_

```json
{
    "message": "Succeeded getting articles data",
    "data": [
        {
            "id": 1,
            "title": "Famous Actor Caught in Hilarious Prank on Movie Set",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "imgUrl": "1994-11-06T00:00:00.000Z",
            "authorId": 1,
            "categoryId": 1,
            "createdAt": "2023-05-18T10:39:51.379Z",
            "updatedAt": "2023-05-18T10:39:51.379Z",
            "User": {
                "id": 1,
                "username": "admin1",
                "email": "admin1@gmail.com",
                "role": "Admin",
                "phoneNumber": "6658372523",
                "address": "216 Kings Way",
                "createdAt": "2023-05-18T10:39:51.363Z",
                "updatedAt": "2023-05-18T10:39:51.363Z"
            }
        },
        {
            "id": 2,
            "title": "Pop Star's Surprise Album Release Shakes Up the Music Industry",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "imgUrl": "1994-11-06T00:00:00.000Z",
            "authorId": 2,
            "categoryId": 1,
            "createdAt": "2023-05-18T10:39:51.379Z",
            "updatedAt": "2023-05-18T10:39:51.379Z",
            "User": {
                "id": 2,
                "username": "staff1",
                "email": "staff1@gmail.com",
                "role": "Staff",
                "phoneNumber": "3788209077",
                "address": "8 Ludington Plaza",
                "createdAt": "2023-05-18T10:39:51.363Z",
                "updatedAt": "2023-05-18T10:39:51.363Z"
            }
        }
        ...,
    ]
}
```

## 14. POST /customers/bookmark/:articleId

Description:
- Update article status by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "articleId": "integer (required)"
}
```

_Response (201 - Created)_

```json
{
    "message": "Succeeded adding a new bookmark",
    "data": {
        "id": 1,
        "title": "Famous Actor Caught in Hilarious Prank on Movie Set",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "imgUrl": "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
        "authorId": 1,
        "categoryId": 1,
        "status": "Active",
        "createdAt": "2023-05-18T10:39:51.379Z",
        "updatedAt": "2023-05-23T15:00:03.604Z"
    }
}
```

_Response (404 - Not Found)_

```json
{
    "message": "Article not found"
}
```

## 15. GET /customers/bookmark

Description:
- Get articles customer added to their bookmark

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "message": "Succeeded getting bookmarks data",
    "data": [
        {
            "id": 1,
            "title": "Famous Actor Caught in Hilarious Prank on Movie Set",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "imgUrl": "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
            "authorId": 1,
            "categoryId": 1,
            "status": "Active",
            "createdAt": "2023-05-18T10:39:51.379Z",
            "updatedAt": "2023-05-23T15:00:03.604Z",
            "Bookmark": {
                "CustomerId": 4,
                "ArticleId": 1,
                "createdAt": "2023-06-04T02:53:47.572Z",
                "updatedAt": "2023-06-04T02:53:47.572Z"
            },
            "Category": {
                "id": 1,
                "name": "Entertainment",
                "createdAt": "2023-05-18T10:39:51.337Z",
                "updatedAt": "2023-05-18T10:39:51.337Z"
            },
            "User": {
                "id": 1,
                "username": "admin1",
                "email": "admin1@gmail.com",
                "password": "password",
                "role": "Admin",
                "phoneNumber": "6658372523",
                "address": "216 Kings Way",
                "createdAt": "2023-05-18T10:39:51.363Z",
                "updatedAt": "2023-05-18T10:39:51.363Z"
            }
        }
    ]
}
```

## 16. GET /customers/articles/:id

Description:
- Get article data by id

Request:

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "message": "Succeeded getting article data",
    "data": {
        "id": 1,
        "title": "Famous Actor Caught in Hilarious Prank on Movie Set",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "imgUrl": "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
        "authorId": 1,
        "categoryId": 1,
        "status": "Active",
        "createdAt": "2023-06-03T17:06:50.276Z",
        "updatedAt": "2023-06-03T17:06:50.276Z",
        "User": {
            "id": 1,
            "username": null,
            "email": "testdatabase@gmail.com",
            "role": "Admin",
            "phoneNumber": null,
            "address": null,
            "createdAt": "2023-06-03T16:19:40.550Z",
            "updatedAt": "2023-06-03T16:19:40.550Z"
        },
        "Category": {
            "id": 1,
            "name": "Entertainment",
            "createdAt": "2023-06-03T17:06:50.072Z",
            "updatedAt": "2023-06-03T17:06:50.072Z"
        }
    },
    "qrCode": "<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n\t\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"100\" height=\"100\" viewBox=\"0 0 2000 2000\" x=\"0\" y=\"0\" shape-rendering=\"crispEdges\"><defs/><rect x=\"0\" y=\"0\" width=\"2000\" height=\"2000\" fill=\"#ffffff\"/><rect x=\"475\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1147\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1147\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"685\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1105\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"685\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1147\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1147\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1147\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"433\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1105\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"475\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1105\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"517\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1147\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"559\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"601\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"643\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"643\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"643\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"643\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"643\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"643\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"643\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"643\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"643\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"685\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"727\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"769\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"811\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"853\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"895\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"937\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"979\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"1021\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1021\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"1021\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1021\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"1021\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"1021\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1021\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1021\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"1021\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"1063\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"1105\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"1147\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"1147\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1147\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"1147\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"1147\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1147\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"1147\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"1147\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"1147\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"1189\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"1231\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"1273\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1315\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"685\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1105\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1357\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1105\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"1399\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"685\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1105\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1147\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"1441\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"433\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1105\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1147\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1483\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"1525\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"685\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1105\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1105\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"811\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1147\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1525\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"475\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"601\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"685\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"769\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"895\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1105\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"643\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"685\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"853\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"937\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1021\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1399\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1441\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1483\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"517\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"559\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"727\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"979\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1063\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1147\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1189\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1231\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1273\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1315\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1357\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"139\" width=\"294\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"181\" width=\"42\" height=\"210\" fill=\"#000000\"/><rect x=\"391\" y=\"181\" width=\"42\" height=\"210\" fill=\"#000000\"/><rect x=\"139\" y=\"391\" width=\"294\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"223\" width=\"126\" height=\"126\" fill=\"#000000\"/><rect x=\"223\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"139\" width=\"294\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"181\" width=\"42\" height=\"210\" fill=\"#000000\"/><rect x=\"1819\" y=\"181\" width=\"42\" height=\"210\" fill=\"#000000\"/><rect x=\"1567\" y=\"391\" width=\"294\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"139\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"181\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"349\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1567\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1609\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1777\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1819\" y=\"391\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"223\" width=\"126\" height=\"126\" fill=\"#000000\"/><rect x=\"1651\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"223\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"265\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1651\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1693\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"1735\" y=\"307\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1567\" width=\"294\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1609\" width=\"42\" height=\"210\" fill=\"#000000\"/><rect x=\"391\" y=\"1609\" width=\"42\" height=\"210\" fill=\"#000000\"/><rect x=\"139\" y=\"1819\" width=\"294\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1567\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1609\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1777\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"139\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"181\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"349\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"391\" y=\"1819\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1651\" width=\"126\" height=\"126\" fill=\"#000000\"/><rect x=\"223\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"1651\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"1693\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"223\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"265\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><rect x=\"307\" y=\"1735\" width=\"42\" height=\"42\" fill=\"#000000\"/><svg version=\"1.0\" id=\"Layer_1\" x=\"664\" y=\"664\" viewBox=\"0 0 700 700\" enable-background=\"new 0 0 700 700\" xml:space=\"preserve\" width=\"672\" height=\"672\" shape-rendering=\"auto\">\n<g>\n\t<g>\n\t\t<polygon fill=\"#000000\" points=\"115.7,584.3 115.7,414.3 87.5,414.3 87.5,584.3 87.5,612.5 115.7,612.5 285.7,612.5 285.7,584.3       \"/>\n\t\t<polygon fill=\"#000000\" points=\"115.7,115.7 285.7,115.7 285.7,87.5 115.7,87.5 87.5,87.5 87.5,115.7 87.5,285.7 115.7,285.7       \"/>\n\t\t<polygon fill=\"#000000\" points=\"584.3,115.7 584.3,285.7 612.5,285.7 612.5,115.7 612.5,87.5 584.3,87.5 414.3,87.5 414.3,115.7       \"/>\n\t\t<polygon fill=\"#000000\" points=\"584.3,584.3 414.3,584.3 414.3,612.5 584.3,612.5 612.5,612.5 612.5,584.3 612.5,414.3     584.3,414.3   \"/>\n\t\t<g>\n\t\t\t<path fill=\"#000000\" d=\"M246.1,274c0-3.3-1.2-6-3.6-8.1c-2.4-2-6.5-3.9-12.5-5.7c-10.4-3-18.2-6.5-23.5-10.6     c-5.3-4.1-7.9-9.7-7.9-16.8s3-13,9.1-17.5c6.1-4.5,13.8-6.8,23.3-6.8c9.6,0,17.3,2.5,23.4,7.6c6,5.1,8.9,11.3,8.7,18.8l-0.1,0.4     h-16.9c0-4-1.3-7.3-4-9.8c-2.7-2.5-6.5-3.7-11.3-3.7c-4.7,0-8.3,1-10.8,3.1s-3.8,4.7-3.8,7.9c0,2.9,1.4,5.4,4.1,7.3     c2.7,1.9,7.4,3.9,14.1,6c9.6,2.7,16.9,6.2,21.8,10.6c4.9,4.4,7.4,10.1,7.4,17.3c0,7.4-2.9,13.3-8.8,17.6     c-5.9,4.3-13.6,6.5-23.3,6.5c-9.5,0-17.7-2.4-24.8-7.3c-7.1-4.9-10.5-11.7-10.3-20.5l0.1-0.4h17c0,5.2,1.6,9,4.7,11.4     c3.2,2.4,7.6,3.6,13.2,3.6c4.7,0,8.4-1,10.9-2.9C244.9,279.9,246.1,277.3,246.1,274z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M342.4,267.1l0.1,0.4c0.2,9.4-2.7,16.8-8.6,22.3c-5.9,5.5-14,8.2-24.5,8.2c-10.5,0-19-3.4-25.5-10.1     s-9.8-15.4-9.8-26v-17.3c0-10.6,3.2-19.2,9.6-26c6.4-6.8,14.7-10.2,24.9-10.2c10.8,0,19.2,2.8,25.2,8.3c6.1,5.5,9,13,8.8,22.6     l-0.1,0.4h-17c0-5.7-1.4-10.1-4.1-13.2c-2.7-3.1-7-4.6-12.8-4.6c-5.2,0-9.4,2.1-12.4,6.4c-3.1,4.2-4.6,9.6-4.6,16.2v17.4     c0,6.6,1.6,12.1,4.8,16.3c3.2,4.2,7.6,6.4,13.1,6.4c5.5,0,9.5-1.5,12.1-4.4c2.6-2.9,3.9-7.3,3.9-13.1H342.4z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M401.6,278h-30.5l-5.9,18.8h-17.6l29.9-87h17.9l29.8,87h-17.6L401.6,278z M375.4,264.3h21.9l-10.8-34.2     h-0.4L375.4,264.3z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M503.6,296.7h-17.4l-35.1-59.4l-0.4,0.1v59.4h-17.4v-87h17.4l35.1,59.4l0.4-0.1v-59.3h17.4V296.7z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path fill=\"#000000\" d=\"M224.4,329.3l51.6,131.6h0.7l51.6-131.6h28v162h-21.9v-64.1l2.2-65.9l-0.6-0.1l-52.5,130.1h-14.6     l-52.3-129.8l-0.6,0.1l2.1,65.5v64.1h-21.9v-162H224.4z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M492.7,416.2h-74.2v57.9h85.6v17.2H396.6v-162h106.3v17.2h-84.4V399h74.2V416.2z\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg></svg>\n\n</svg>\n"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (401 - Unauthenticated)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```