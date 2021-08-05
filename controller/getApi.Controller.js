const con = require('../databaseConnection/connection')

module.exports.showAllData = (req,res) => {
    var para= req.params.id
    console.log(para)
    con.query('select * from studentsDetails where id =? ',para, (err, result) => {
        if(err) throw err;
        res.send(result)
        console.log(result)
    });
};