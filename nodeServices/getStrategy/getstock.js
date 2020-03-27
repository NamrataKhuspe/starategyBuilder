var dbconnection = require('../database/dbconnection');


module.exports.getStock = async function (req, res) {
    try {
        var arr = [];
        console.log("in getStock data --> ");

        var query = `select * from get_stock`;
        var querydata = await dbconnection.executevaluesquery(query, []);
        console.log("querydata ======= ", querydata[0].row);
        querydata.forEach(element => {
            arr.push(element);
        });
        console.log("querydata ======= ", querydata.stock_data);
        res.send ({ status: true, data: arr });

    } catch (error) {
        console.log("error in catch clause ", error);
    }

}