var fs=require('fs');
// console.log(fs.readFileSync('./sample.txt', 'utf8'));

// ASSYNCRONOUSLY
// fs.readFile('./sample.txt','utf8',function(err,data){
//     if(err) throw err;

//     console.log(data)
// })


// WRITE A FILE
var d=fs.writeFileSync('./sample.txt',"hello kujhsgdfjgkhdgb");
console.log(fs.readFileSync('./sample.txt','utf8'));