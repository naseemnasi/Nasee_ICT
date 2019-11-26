function lddoc(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
          }
        };
        xhttp.open("GET", "ajxtxt.txt", true);
        xhttp.send();
      
}

// function lddoc(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         var obj=JSON.parse(this.responseText);
//         document.getElementById("demo").innerHTML = obj.text_out;
        
//       }
//     };
    
//     xhttp.open("GET", "http://www.randomtext.me/api/lorem/ul-5/5-15", true);
//     xhttp.send();
  
// }



// PROMISE FUNCTION
// var pr1=new Promise (function(win,fail){
//   x="10";
//   var y=10;
//   if(x===y)
//   {
//     win();
//   }else{
//     fail();
//   }
// });
// pr1.then(function(){
//   console.log("same");
// },function(){
//   console.log("Not same");
// });

// var pr1=new Promise (function(win,fail){
//   var x=10;
//   var y=10;
//   if(x!==y)
//   {
//     win("success");
//   }else{
//     fail("fail");
//   }
// });
// pr1.then(function(msg){
//   console.log(msg);
// }).catch(function(msg){
//   console.log(msg);
// });

// alert("hello");


// async function f(){
// var pr1=new Promise (function(win,fail){
//   var x=10;
//   var y=10;
//   setTimeout(()=>{
//   if(x==y)
//   {
//     win("success");
//   }else{
//     fail("fail");
//   }
// },2000);
// });
// await pr1.then(function(msg){
//   console.log(msg);
// }).
// catch(function(msg){
//   console.log(msg);
// });
// }
// f();




//ASYNC WITH CALLBACK
// function getuid(id,callbck)
// {
//   setTimeout(()=>{
//     callbck({id:id,Name:'meera'});
// alert("fdng)");
//   },2000);
// }

// console.log('berfore');
// getuid(1,function(user){
//   console.log(user);
// });


// console.log('before');
// var pro1=new Promise((resolve,reject)=>{
//   setTimeout (()=>{
//     resolve({id:1,Name:'nzi'},1000);  
// });
// pro1.then(function(user){
//   console.log(user)
//   return 'success';
// }).
// then(function(msg){
//   console.log(msg);
//   return 'to second string';
  
// }).then((msg2)=>{
//   console.log(msg2)
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve ({id:2,name:'shhn'})
//       console.log(user)
//     },2000)
  
//   }).then((user)=>{
//     console.log(user);
//   }).
//   catch((err)=>{
//     console.log(err)
//   });
//   console.log('after');
// }

// })


//PROMISE INSIDE A FUNCTION
// function myf(msg){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(msg)
//     }, 2000);
//   });
// }
// myf({id:1,name:'nzi'}).then((user)=>{
//   console.log(user)
// })