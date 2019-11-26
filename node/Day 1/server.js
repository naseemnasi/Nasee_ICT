var http=require("http");
// console.log(http);

// http.createServer(function(req,resp){
//     resp.write('<h1>HELLO</h1>');
//     resp.end("all");

// })
// .listen(3000);



// var server=http.createServer(function(req,resp){
//         resp.write('<h1>HELLO</h1>');
//         resp.end("all");
//     });
//     server.listen(8008);
//     console.log(server)


var events=require("events");
var eveem=new events.EventEmitter();
function ringbell(){
    console.log("ring ring eing");

}
eveem.on('doorOpen',ringbell);
eveem.emit('doorOpen');
