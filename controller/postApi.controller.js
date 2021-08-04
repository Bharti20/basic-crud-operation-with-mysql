const con = require('../databaseConnection/connection')

module.exports.insertData = (req,res) =>{
    let data = {
        id: req.body.id,
        name: req.body.name,
        city:req.body.city
    };
    con.query("insert into studentsDetails set?", data, function(err, result) {
        if(err) throw err;
        console.log(err)
        res.send(data)
    })
}
