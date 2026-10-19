import { getEmployee, getEmployees } from "#db/employees";
import express from "express";

import { getEmployees } from "#db/employees";

const app = express();

export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  
});

app.get("/employees/:id", (req, res) => {
  
});

app.get("/employees/random", (req, res) => {});
