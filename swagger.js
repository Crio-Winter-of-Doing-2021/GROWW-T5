const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: "1.0.0",
        title: "Groww Externship API",
        description: "API Documentation for groww contextual chatbot"
    },
    host: process.env.HOST || "localhost:4000",
    basePath: "",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "auth",
            "description": "Authentication apis"
        },
        {
            "name": "product",
            "description": "Product related apis"
        },
        {
            "name": "order",
            "description": "Order related apis"
        },
        {
            "name": "faq",
            "description": "FAQ related apis"
        }
    ],
    responses: {
        "400" : {
            "name": "ValidationError",
            "message": "Validation Failed",
            "statusCode": 400,
            "error": "Bad Request"
        },
        "500" : {
            "msg": "Server Error",
        },
        "401": {
            "msg": "Unauthorized"
        }
    }
}

const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);