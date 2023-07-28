var htp=require('http')
htp.createServer(function(req,res){

    res.write("Welcome back you valuable human")
    res.end()
}).listen(3000)