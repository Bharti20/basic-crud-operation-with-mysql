dbconn = require('../databaseConnection/connection')

module.exports.deleteData = (req, res) => {
    dbconn.query('delete from `studentsDetails` where `id`= ?', [req.body.id], (err, result) => {
        if(err) throw err;
        console.log('one record deleted')
        res.send('one record deleted')
    })
}