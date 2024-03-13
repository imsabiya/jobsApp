console.log("do it");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const authMiddleware = require("./middlewares/authMiddleware");

//swagger
const swaggerUi = require("swagger-ui-express");
const specs = require('./swagger');

//routes
const userRoutes = require("./routes/user-route");
const jobRoutes = require("./routes/job-route");

// DB

mongoose.connect("mongodb://localhost:27017/jobs-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));
db.once("open", () => {
  console.log("mongoDB connection established");
});

//middleware

app.use(cors());
app.use(express.json());

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

//routes

app.use(userRoutes);
app.use(authMiddleware, jobRoutes);

// listen to server
const port = 5003;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
