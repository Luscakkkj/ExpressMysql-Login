const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_DATABASE,
    password: process.env.DATABASE_PASSWORD, 
});

db.connect((erro) => {
    if (erro) {
        console.log(`Erro na conexão: ${erro}`);
    }else{
        console.log('Conectado');
    }
})


module.exports = {db: db}