import mysql from 'mysql';

const conetion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Biel@2000_',
    database: 'db_ponto'
});

conetion.connect();

/**
 * Run sql code with or without values
 * @param {string} sql statement to be executed
 * @param {string=id | [ponto, id]} value to be passed to SQL
 * @param {string} rejectMessenge to be displayed
 * @returns Promise object
 */
export const consulta = (sql, value='', rejectMessenge) => {
    return new Promise((resolve, reject) => {
        conetion.query(sql, value, (error, result) => {
            if (error) return reject(rejectMessenge);
            return resolve(JSON.parse(JSON.stringify(result)));
        });
    });
};

export default conetion;
