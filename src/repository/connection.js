import mysql2 from 'mysql2/promise.js';

let connection = await mysql2.createConnection({

    host:process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,

    typeCast: function (field, next) {
        // faz a verificação para saber se a booleano
    if (field.type === 'TINY' && field.length === 1) {
      return (field.string() === '1');
    }
    // faz a verificação para saber se esse campo é um numero Decimal
    else if (field.type.includes('DECIMAL')) {
      return Number(field.string());
    }
    else {  
      return next();
    }
  }

})

console.log (`-- Banco de dados conectado -- `)
export default connection