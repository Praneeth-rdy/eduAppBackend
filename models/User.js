const { open } = require('sqlite');
const sqlite3 = require('sqlite3');

const createUserTable = async (db) => {
    const createUserTableQuery = `
    CREATE TABLE user (
        name VARCHAR(200),
        email VARCHAR(260),
        password VARCHAR(500),
        is_verified BOOLEAN
    );
    `
    await db.run(createUserTableQuery);
}

function createUser(db, { name, email, password, isVerified }) {
    
}