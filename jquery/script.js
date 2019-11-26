// $(document).ready(function(){
// function showdiv(x){
//     if(x==1){
//         $("#ddd").html("<ul><li>banana</li><li>apple</li>");
//     }else if(x==2){
//         $("#ddd").html("<ul><li>lion</li><li>tiger</li>");
//     }
//     else{
//         alert("enter 1 or 2")
//     }
// }
// $('#btn').click(function(){
// showdiv($('#txt').val());
// });
// });




$(document).ready(function(){
    function showdiv(){
        
        if($('#chk.val()=='Fruits'){
            $("#ddd").html("<ul><li>banana</li><li>apple</li>");
        }
        else if($('#chk.val()=='Animals'){
            $("#ddd").html("<ul><li>lion</li><li>Tiger</li>");
        }


    }
    $('[name]').change(function(){
    showdiv();
    });
    });
    