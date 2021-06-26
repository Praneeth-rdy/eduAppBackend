const path = require('path');
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');


const dbPath = path.join(__dirname, "../goodreads.db");
let db = null;

const initDb = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });
        console.log("Database Initialised")
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
}

const accessDb = (request, response, next) => {
    if (db == null) {
        initDb();
    }
    request.getDb = () => db;
    console.log('Database access given');
    next();

};

module.exports.initDb = initDb;
module.exports.accessDb = accessDb;