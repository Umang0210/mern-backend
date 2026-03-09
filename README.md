# MERN Backend (Express + EJS + MongoDB)

A server-side Node.js application for managing users and products using Express, EJS templates, and MongoDB (Mongoose).

## Features

- User management (create, list, edit, delete)
- Product management (create, list, edit, delete)
- Session-based login using `express-session` + `connect-mongo`
- Password hashing with `bcrypt`
- EJS views with layout support
- Vercel deployment config included (`vercel.json`)

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- EJS + express-ejs-layouts
- express-session + connect-mongo
- bcrypt

## Project Structure

```text
config/        # Database connection
controllers/   # Route handlers
middleware/    # Auth helpers
models/        # Mongoose schemas
public/        # Static assets
routes/        # Express routes
views/         # EJS templates
index.js       # App entry point
```

## Prerequisites

- Node.js 18+
- MongoDB connection string

## Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<dbName>
```

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

The app starts on `http://localhost:8080`.

For local development with auto-restart:

```bash
npm run dev
```

## Main Routes

### User Routes (`/users`)

- `GET /users` -> List users
- `GET /users/login-form` -> Login page
- `POST /users/login` -> Login user (creates session)
- `POST /users/signup` -> API-style signup response
- `GET /users/add` -> Add user form
- `POST /users/add` -> Create user from form
- `GET /users/:id/edit` -> Edit user form
- `POST /users/:id/edit` -> Update user
- `GET /users/:id/delete` -> Delete user

### Product Routes (`/products`)

- `GET /products` -> Product home display
- `GET /products/show` -> Admin/list page for products
- `GET /products/add` -> Add product form
- `POST /products/add` -> Create product
- `GET /products/:id/edit` -> Edit product form
- `POST /products/:id/edit` -> Update product
- `GET /products/:id/delete` -> Delete product

## CI

GitHub Actions workflow is defined at:

- `.github/workflows/ci.yml`

It runs on push and pull requests, installs dependencies, and performs JavaScript syntax checks on all `.js` files.
It also executes `npm test`.

## Tests

Run tests locally with:

```bash
npm test
```

The repository includes a starter test file at `test/models.test.js` that validates key Mongoose schema constraints.

## Deployment

`vercel.json` is included for Vercel Node deployment.

## Notes

- Current app port is hardcoded to `8080` in `index.js`.
- Session secret is currently hardcoded in source (`index.js`).
- Add test files under Node's built-in test runner (`node --test`) to enforce behavior in CI.
