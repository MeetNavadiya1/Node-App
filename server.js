const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Welcome to the Node.js demo app!");
});

app.get("/health", (request, response) => {
  response.json({ status: "ok" });
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
