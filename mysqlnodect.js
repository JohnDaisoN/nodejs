var sql=require('mysql2');
var conn=sql.createConnection({
    host: "localhost",
    user: "root",
    password: "vandammew@2" 
})
conn.connect(function(err){
    if(err) throw err;
    console.log('Connection successfully established');
    conn.query("CREATE DATABASE JD",function(err,result){
        if(err) throw err;

        console.log('JD Database created successfully ');
    })
    
})