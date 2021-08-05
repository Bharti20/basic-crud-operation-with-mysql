const dbconn = require('../databaseConnection/connection')

module.exports.showAllData = (req, res) => {
    dbconn.query('select * from studentsDetails', (err, result) => {
        if(err) throw err;
        res.send(result)
        console.log(result)
    });
};
