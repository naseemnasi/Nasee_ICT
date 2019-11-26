
var events=require("events");
var eveem=new events.EventEmitter();
// function ringbell(){
//     console.log("ring ring eing");

// }
// eveem.on('doorOpen',ringbell);//binding
// eveem.emit('doorOpen');//firing


eveem.on('myevent',(arg1,arg2)=>{
    console.log("id is "+arg1+"and name is "+arg2);
});
eveem.emit('myevent',1,'naseem');//firing
 