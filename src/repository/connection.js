import mysql2 from 'mysql2/promise.js';

let connection = await mysql2.createConnection({

    host:process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB

})

console.log (`-- Banco de dados conectado -- `)
export default connection