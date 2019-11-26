$(document).ready(()=>{
    
    $("button").click(()=>{
        $.ajax({
            method: "GET",
            url: "http://www.randomtext.me/api/lorem/ul-5/5-15",
            success: function(result,status,xhhtp){
                console.log(result);
                console.log(status);
                console.log(xhhtp);
                $("#demo").html(result.text_out)
            },
            error: function(){
                console.log("URL ERROR OCCURED");
            }
        })
    })
})