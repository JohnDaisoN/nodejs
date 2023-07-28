var sql=require('mysql2');
var conn=sql.createConnection({
    host: "localhost",
    user: "root",
    password: "vandammew@2"
})
conn.connect(function(err){
    if(err) throw err;
    console.log('Connection successfully established');
    
})