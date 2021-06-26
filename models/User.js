const { open } = require('sqlite');
const sqlite3 = require('sqlite3');

exports.createUserTable = async (db) => {
    // Creates a user table if not exist
    const createUserTableQuery = `
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER NOT NULL UNIQUE PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(260) NOT NULL UNIQUE,
        password VARCHAR(500),
        is_verified BOOLEAN DEFAULT 0
    );
    `
    try {
        await db.run(createUserTableQuery);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    
}

exports.createUser = async (db, { name, email, password }) =>  {
    
}

exports.removeUserById = async (db, id) => {

}

exports.updateUserById = async (db, id, { name, email, password, isVerified }) => {

}

exports.findUserById = async (db, id) => {

}

exports.findUsersByName = async (db, id) => {

}

exports.findUserByEmail = async (db, id) => {

}