
$(document).ready(function(){
    function showdiv(val){
        
        if(val=="Fruits"){
            $("#ddd").html("<ul><li>banana</li><li>apple</li>");
        }
        else if(val=="Animals"){
            $("#ddd").html("<ul><li>lion</li><li>Tiger</li>");
        }


    }
    $('input[type="radio"]').change(function(){
    showdiv($(this).val());
    });
});
    