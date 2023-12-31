const mysql = require('mysql');
const sql = require('./db/sql.js');

const pool = mysql.createPool({
    host            : process.env.MYSQL_HOST,
    port            : process.env.MYSQL_PORT,
    user            : process.env.MYSQL_USERNAME,
    password        : process.env.MYSQL_PASSWORD,
    database        : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT
});

const query = async (alias, values) => {
    return new Promise((resolve, reject) => {
        pool.query(sql[alias], values, (err, results) => {
            if(err) {
                console.log(err);
                reject(err);
            }else{
                resolve(results);
            }
        })
    });
}

// const getData = async() =>{
//     console.log(await query('customerList'));
// };

// getData();

module.exports = {
    query
};