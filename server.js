require('dotenv').config({ path: './config.env' });
const express = require('express');
const path = require('path');
const { initDb, accessDb, createTablesIfNotExist } = require('./config/db');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/error');

const dbPath = path.join(__dirname, "./goodreads.db");
let db = null

const startDatabase = new Promise((resolve, reject) => {
    try {
        // Establishing connection and Initializing database on server start with all necessary tables
        const startDatabase = async () => {
            db = await initDb(dbPath);
            await createTablesIfNotExist(db);
            resolve(db);
        }
        startDatabase();
    } catch (error) {
        reject(error);
    }
});

startDatabase.then((db) => {
    const app = express();
    // Global middlewares runs for all routes for eveyrtime a user requests the resource url
    // using express json parser for all requests
    app.use(express.json());
    // Provides db access for all the requests at db through request.getDb()
    app.use((...props) => accessDb(db, ...props)); // database can be restructed to few routes by passing accessDb middleware to only those required

    // Router for /api/auth
    app.use('/api/auth', require('./routes/auth'));
    // app.use('/api/private', require('./routes/private'));

    // Error Handler (Should be last piece of middleware)
    // app.use(errorHandler);



    app.get('/', (request, response) => {
        console.log(request.getDb());
        response.send("Hello World");
    });


    // const server = app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}/`));

    /*
    process.on('unhandledRejection', (error, promise) => {
        console.log(`Logged Error: ${error}`);
        server.close(() => {process.exit(1)});
    });
    */

    const PORT = process.env.PORT || 5050
    app.listen(PORT, () => {
        console.log(`Server Running at http://localhost:${PORT}/`);
    });
}).catch((error) => {
    console.log("Couldn't start server", error);
});

