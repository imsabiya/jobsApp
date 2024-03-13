const swaggerJSdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "jobs-api",
      version: "1.0.0",
      description: "A short description of your API",
    },
    servers: [
      {
        url: "http://localhost:5003",
      },
    ],
    security: [{ bearerAuth: [] }], // Enable bearer token authentication
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"], //path to the api docs
};

const specs = swaggerJSdoc(options);
module.exports = specs;
