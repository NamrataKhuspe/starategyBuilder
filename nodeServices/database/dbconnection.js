var mysql = require('mysql');
// const db = require('./localdb')
const db = require('./db')

var pool = mysql.createPool(
    {
        // timeout: 60 * 120 *1000,
        acquireTimeout: 60 * 60 * 1000,
        connectionLimit: 20,
        host: db.host,
        user: db.user,
        password: db.password,
        database: db.database,
        connectTimeout: 1000,
        acquireTimeout: 1 * 60 * 1000,
        timeout: 3 * 60 * 1000
    }
);
exports.executequery = function (query) {
    console.log('quey-------', query);
    return new Promise((result, reject) => {
        pool.query(query, function (err, rows, fields) {
            if (err) {
                console.log("---executequery error--->", err);
                result({ type: "error", message: "internal server error" });
            };
            result(rows);
        });
    });
}
exports.executevaluesquery = function (query, values) {
    console.log('quey-------', query, values);
    return new Promise((result, reject) => {
        pool.query(query, values, function (err, rows, fields) {
            if (err) {
                console.log("---executevaluequery error---->", err)
                result({ type: "error", message: "internal server error" });
            };
            result(rows);
        });
    }).catch((err) => {
        console.log("execval err- ", err)
    });
}