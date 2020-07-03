var dbconnection = require('../database/dbconnection');

module.exports.UserRegister = async function (req, res) {

    try {
        console.log("------------- > user registration ============== >  ", req.body)
        var reqbody = req.body;
        var query = `insert into user_registration (user_email_id, user_pass, user_conf_pass, status) values (?,?,?,?)`;
        var data = [reqbody.email, reqbody.pass, reqbody.conf_pass, 1];
        var querydata = await dbconnection.executevaluesquery(query, data);
        console.log("querydata ======= ", querydata);
        return ({ status: true, insertedId: querydata.insertedId });
    } catch (err) {
        console.log("error -- > ", err);
        return ({ status: false, message: 'Something went wrong!' });
    }
}