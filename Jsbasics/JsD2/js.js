// function mul(num1,num2){
//     return num1*num2;

// }
// let result=mul(5,6);
// console.log(result);

// Egma Script 5 function structure giving below

// let mul=function (num1,num2){
//     return num1*num2;

// }
// let result=mul(6,6);
// console.log(result);

// Egma Script 6 function structure giving below
// let mul= (num1,num2)=>{
//     return num1*num2;

// }
// let result=mul(5,6);
// console.log(result);


// finding squre of a no

// let mul= (num1)=>{
//     return num1*num1;

// }
// let result=mul(8);
// console.log(result);


// CALLBACK Function
// let deta= (num,cllbck)=>{
//     console.log("the passed id = "+num);
//     cllbck({usrid:num,name:'Nzz'});
// }
// deta(1,(str)=>{console.log("FINISHED"+str.name+str.usrid);});


// setting a delay and stting a js into assynchronous
// console.log("1st line");
// setTimeout(()=>{
//     console.log('2nd line of command');
// },2000);
// console.log("3rd Line")
// let gtusr=(id,cl)=>{
//     setTimeout(()=>{
//         cl({id:id,name:'meera'});
//     },2000);
// }
// console.log("Before");
// gtusr(1,(user)=>{
//     console.log(user);
// });

// console.log('after');


// OBJECT Creation
// var pers=new Object;
// pers.setValue= function(n,a){
// this.name=n;
// this.age=a;

// }
// pers.display=function(){
//     console.log("name is "+this.name+" age is "+this.age);

// }

// pers.setValue('nazi',23);
// pers.display();


// pers.setValue('diyab',29);
// pers.display();


// function pers(fname,lname){
//     this.fname=fname;
//     this.lname=lname;
// }
// pers.prototype.getdetail=function(){
//     console.log('the first name : '+this.fname+'last name :'+this.lname);
// }

// let person1= new pers('naseem','nazi');
// let person2= new pers('skdb','lksfjgk');

// person1.getdetail();
// person2.getdetail();



// const coder={
//     study : false,
//     display : function(){
//         console.log('the name is '+this.name+ ' is he studying ?'+this.study);
//     }
// }
// var m1=Object.create(coder);
// m1.name='Nzi';
// m1.study=true;
// m1.display();

//creating a CLASS 
// class vehicle{
//     constructor(name,make,year){
//         this.name=name
//         this.make=make
//         this.year=year;
//     }
//     display(){
//         alert(`${this.name} is a model of ${this.make} in the year of ${this.year}`);
//     }
// }

// var bike1=new vehicle('Black pearl','RE','2014');
// var bike2=new vehicle('dead pool','RE','2017');
// bike1.display();
// bike2.display();



// class  person{
//     constructor(nme){
//         this.name=nme;
//     }
// }
// class student extends person{
//     constructor(n,id){
//         super(n);
//         this.id=id;

//     }
//     tost(){
//         console.log(`name of the respective person is ${this.name} with an id of ${this.id}`);
//     }
// }
// let st1=new student('nzi','2');
// let st2=new student('nasi','3');
// st1.tost();
// st2.tost();

// prompt("enter your name")