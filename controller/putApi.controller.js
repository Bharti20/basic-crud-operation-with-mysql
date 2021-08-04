const con = require('../databaseConnection/connection')

module.exports.updateData = (req,res) => {
    con.query('update studentsDetails set name = ? where id = ?',[req.body.name ,req.body.id], (err, result) => {
        if(err) throw err;
        console.log('data updated')
        res.send(JSON.stringify(result))
    });
};

