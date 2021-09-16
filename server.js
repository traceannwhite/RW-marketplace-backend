require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("./db/connection");
const app = express();
const { PORT } = process.env || 8080;

// import any routers

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// test the server
app.get("/", (req, res) => res.send(`Server is working.`));

// routes // INCOMPLETE, ADD ROUTES
// app.use("/____");
// app.use("/____");
// app.use("/____");

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
