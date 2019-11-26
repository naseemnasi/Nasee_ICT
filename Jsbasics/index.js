/*           function sum1(num1,num2){
                return num1+num2;

            }
            function add(num1,num2)
            {
                num3=num1+num2;
                console.log("number 1 ="+num1+"     number 2 ="+num2)
                console.log("sum="+num3);
            }
            function greet(name){
                console.log("hello"+name);
            }
                let name="nazi";
                numb=24;
                console.log(name);
                console.log(numb);
                const prop="this is a test text";
                console.log(prop.length);
                console.log(prop.toUpperCase());
                console.log(prop.substring(0,12));
                console.log(prop.substring(0,12).toUpperCase());
                console.log(typeof name);
                name=123;*/
                console.log(typeof name);
                let stg = 45;
                document.getElementById("stg").innerHTML ="<h1>"+stg+"</h1>";
                /*let p={
                    name2:"sha",
                    age:22,
                    addr:{
                        city:"elt",
                        state:"kerala",
                    }

                };
                console.log(p.name2);
                console.log(p.addr);
                console.log(getElementById("str").innerHTML = p)

                var car=["a", "b", "c"];
                console.log(car);
                car.push('black');
                console.log(car);
                console.log(car.indexOf('black'));
                car.splice(1,2);
                car.splice(1,2);
                console.log(car);
                greet("  naseem");
                add(12,32);
                console.log(sum1(12,56));
                if(numb>p.age)
                {
                    document.write("sha is younger");
                }else{
                    document.write("sha is older");
                }
                document.write("<h1>jfhvgjh</h1>")
                switch(p.addr.city){
                    case "tmy":
                        text="thamarassey";
                        break
                    case "blsry":
                        text="balussery";
                        break
                    case "elt":
                        text="elettil";
                        break
                    default:
                        text="nothing";
                }
                document.write(text);
                var i=11;
                /*for(i=0;i<=100;i++){
                    document.writeln("<br>"+i);
                }
  
                do{
                    document.writeln("<br> hi");
                    i++;
                }while(i<10)
*/

console.dir(document);
let hold=document.getElementsByClassName("heading");
for(i=0;i<hold.length;i++)
{
    hold[i].style.backgroundColor="red";

}
let s=document.getElementsByTagName('h1');
console.log(s);
s[1].textContent="tag name";



let area = document.querySelector('input[type="button"]');
area.value="nzi";

let ulco0 = document.querySelector('#pp');
ulco0.style.color="yellow";

function colorfunc()
{
alert("changed");

let ulco = document.querySelector('.lichi');
ulco.style.color="red";

let ulco1 = document.querySelector('.lichi:last-child');
ulco1.style.color="green";

let ulco3 = document.querySelector('.lichi:nth-child(2)');
ulco3.style.color="blue";
}
function onldfun()
{
    alert("ksfhgjkh");
}