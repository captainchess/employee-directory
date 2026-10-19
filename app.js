import { getEmployee, getEmployees } from "#db/employees";
import express from "express";

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
  const { id } = req.params;
  
  const data = getEmployee(id - 1);

  if (!data) {
    return res.status(404).send("Index is invalid!");
  }

  res.send(data);
});

app.get("/employees/random", (req, res) => {});
