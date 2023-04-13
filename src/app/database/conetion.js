import mysql from 'mysql';

const conetion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Biel@2000_',
    database: 'db_ponto'
});

conetion.connect()

export default conetion;