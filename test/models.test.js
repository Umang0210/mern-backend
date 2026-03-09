import test from "node:test";
import assert from "node:assert/strict";

import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";

test("user schema includes required core fields", () => {
  const schema = userModel.schema;

  assert.ok(schema.path("name"), "name field should exist");
  assert.ok(schema.path("email"), "email field should exist");
  assert.ok(schema.path("password"), "password field should exist");
  assert.ok(schema.path("role"), "role field should exist");

  assert.equal(schema.path("email").options.required, true);
  assert.equal(schema.path("email").options.unique, true);
  assert.equal(schema.path("role").options.default, "user");
});

test("product schema includes required fields", () => {
  const schema = productModel.schema;

  assert.ok(schema.path("name"), "name field should exist");
  assert.ok(schema.path("price"), "price field should exist");
  assert.ok(schema.path("description"), "description field should exist");
  assert.ok(schema.path("imageurl"), "imageurl field should exist");

  assert.equal(schema.path("name").options.required, true);
  assert.equal(schema.path("price").options.required, true);
  assert.equal(schema.path("description").options.required, true);
  assert.equal(schema.path("imageurl").options.required, true);
});
