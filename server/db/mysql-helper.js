const mysql = require('mysql');
const config = require('./../config/config.js');

const pool = mysql.createPool(config.MYSQL);

const query = function(sql, args) {

  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        resolve(err);
      } else {
        connection.query(sql, args, (err, result) => {

          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
          connection.release();

        });
      }
    });
  });

};

module.exports = {
  query,
};