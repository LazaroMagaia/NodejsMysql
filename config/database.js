const mysql = require("mysql");

const pool =  mysql.createConnection({
    port:process.env.PORT,
    host:process.env.HOST,
    user:"root",
    password:"",
    database:process.env.DBNAME,
    connectionLimit : 10,
});

pool.connect(function(err){
    if(err){
        console.log("Erro na conneção com o banco de dados",err)
    }else
    console.log("successo")
})

module.exports = pool;