const con = require('../databaseConnection/connection')

module.exports.showAllData = (req,res) => {
    con.query('select * from studentsDetails where id =? ',[req.body.id], (err, result) => {
        if(err) throw err;
        res.send(result)
        console.log(result)
    });
};