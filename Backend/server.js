const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const validation = require('./middleware/validation');
var cors = require('cors');
var session = require('express-session');

app = express()

// CONNECTING TO DB
async function dbInit() {
    try {
        await mongoose.connect(process.env.DBURI || 'mongodb://root:example@localhost:27017/ExternDB?authSource=admin&w=1', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("DATABASE CONNECTED");
    } catch(err) {
        console.log(err);
    }
}

function createApp() {
    app = express();
    // INITIALIZE ENV VARIABLES
    dotenv.config();

    // INITIALIZING DATABASE
    dbInit();

    // INITIALIZING MIDDLEWARES
    app.use(cors());
    app.set('trust proxy', 1); // trust first proxy
    app.use(session({
        secret: process.env.SECRET_KEY || "secret!",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }));
    app.use(express.json());
    app.use(express.urlencoded({extended : false}));
    app.use(logger);

    // ADD ROUTERS HERE
    app.use('/api/v1/auth', require('./api/auth/routes'));
    app.use('/api/v1/product', require('./api/products/routes'));
    app.use('/api/v1/order', require('./api/orders/routes'));
    app.use('/api/v1/faq', require('./api/faq/routes'));

    app.use(validation);
    // SWAGGER
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

    return app;
}

function runApp() {
    // DEFINING PORT AND HOST  
    const PORT = process.env.PORT || 4000
    const HOST = process.env.HOST || 'localhost'
    app = createApp();
    app.listen(PORT, () => console.log(`Server running on http://${HOST}:${PORT}`));
    module.exports = app;
}

runApp();