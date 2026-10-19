import { getEmployee, getEmployees } from "#db/employees";
import express from "express";

import { getEmployees } from "#db/employees";

const app = express();

export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  const data = getEmployees();
  res.send(data);
});

app.get("/employees/:id", (req, res) => {
  const { index } = req.params;
  const data = getEmployee(index);

  if (!data) {
    return res.status(404).send("Index is invalid!");
  }

  res.send(data);
});

app.get("/employees/random", (req, res) => {});
