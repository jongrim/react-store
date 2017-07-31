const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bamazon',
  multipleStatements: true
});

exports.getAll = function() {
  return new Promise(function(resolve, reject) {
    connection.query(`SELECT * FROM products`, function(err, results, fields) {
      resolve(results);
    });
  });
};

exports.viewProducts = function() {
  connection.query(`SELECT item_id, product_name, price FROM products`, function(err, results, fields) {
    if (err) throw err;
    return results;
  });
};

exports.purchaseProduct = function(id, qty) {
  return new Promise(function(resolve, reject) {
    console.log(id, qty);
    connection.execute(`SELECT stock_quantity, price FROM products WHERE item_id = ?`, [id], (err, results, fields) => {
      if (results.length === 0) return reject('No results!');
      if (results[0].stock_quantity < qty) {
        resolve(`Insufficient quantity!`);
      } else {
        connection.query(
          `UPDATE products SET stock_quantity = ? - ? WHERE item_id = ?; SELECT * FROM products;`,
          [qty, id],
          (err, results, fields) => {
            resolve('Transaction successfull');
          }
        );
      }
    });
  });
};
