const { Pool } = require("pg");
 
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123456",
    database: "node"
});
 
module.exports = pool;