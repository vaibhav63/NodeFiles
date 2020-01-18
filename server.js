// CREATE A SERVER MANIPULATING URL
//var http = require('http');
//var url=require('url');
//http.createServer(function(req,res){
//    
//    res.writeHead(200,{'Content-Type':'text/html'});
//    var q=url.parse(req.url,true).query;
//    res.write(q.date+"     "+q.name);
//    res.end();
//    
//}).listen(8000);
//



//CREATE A SERVER MANIPULATING FILE
var http = require('http');
var fs = require('fs');
var url =require('url');
http.createServer(function(req,res){
    var q=url.parse(req.url,true);
    var file="." +q.pathname;
    if(file=='./'){
        file=file+'animation';
    }
    fs.readFile(file+'.html',function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("error found no response");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
       
        return res.end("wippppi");
        
        
    });
    
    
}).listen(8000);

console.log("request recieved!!!!!");