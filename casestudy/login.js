$(document).ready(function(){
    $("button").click(function(){
        var u=$("#usr").val();
        var p=$("#pwd").val();
        valfun(u,p,function(f){
            if(f==1){
                // alert("got in");
                window.location.href="home.htm";
            }
            else{
                // alert("got in in else part");
                alert("enter the right user name and password")
            }
        })
        // var uname=$("#usr").val();
        // var pwd=$("#pwd").val();
        
        // if(uname=="user"&&pwd==123)
        // {
        //     console.log(uname);
        // }elseif(uname!="user"&&pwd!=123){
        //     console.log(uname);
            // alert("wrong")
    // }
        // console.log(uname);
        function valfun(u,p,c){
            var flag=0;
            // console.log(u);
            // ps=parceint(p)
               if(u=="admin"&&p=="12345"){
                   flag=1;
                   console.log(flag);
               }else{
                   flag=0;
                   console.log(flag);
               }
               c(flag); 
            //     var uname=$("#usr").val();
    //     var pwd=$("#pwd").val();
        
    //     if(uname=="user"&&pwd==123)
    //     {
    //         console.log(uname);
    //     }elseif(uname!="user"&&pwd!=123){
    //         console.log(uname);
    //         alert("wrong")
    // }
    //     console.log(uname);
        }
    })
})