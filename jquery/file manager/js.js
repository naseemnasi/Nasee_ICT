$(document).ready(()=>{
    $("input").change(function(){
        // var s=$(this).files.length;
        for(let i=0;i<this.files.length;i++){
            let file=this.files[i];
            // alert(file.name);
            // console.log(file);
            let reader= new FileReader;
            $("#demo").html("<img src='re'")
            // reader.readAsText(file)
            reader.onload=function(){
                console.log(reader.result);
                reader.onerror=function(){
                    console.log(reader.error);
                }
            }
        }
    })
    
})