const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()
const con = mysql.createConnection({
    host:process.env.HOST,
    user: 'root',
    password: 'Bharti@1mysql',
    database: process.env.DATABASE
});
con.connect((err) => {
    if(err) throw err;
    console.log('Successful Connected with Database');
    let sql = 'create table IF NOT EXISTS studentsDetails (id int, name varchar(255) not null, city varchar(255) not null);'
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log('Table Created')
    });
})

module.exports = con
