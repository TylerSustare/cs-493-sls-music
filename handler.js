"use strict";
const express = require("serverless-express/express");
var app = express();

app.get("/ex", function (req, res) {
  const auth = req.get("authorization");
  res.send({
    foo: "bar",
    baz: "bax",
    auth,
  });
});

const handler = require("serverless-express/handler");

module.exports.api = handler(app);
