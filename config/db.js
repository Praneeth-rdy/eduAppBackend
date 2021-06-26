const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const { createUserTable } = require('../models/User');


const initDb = async (dbPath) => {
    try {
        const db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });
        console.log("Database Initialised");
        return db;
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
}

module.exports.accessDb = (db, request, response, next) => {
    if (db == null) {
        db = initDb();
    }
    request.getDb = () => db;
    console.log('Database access given');
    next();

};

module.exports.createTablesIfNotExist = (db) => {
    createUserTable(db);
}

module.exports.initDb = initDb;