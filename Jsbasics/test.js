function vf()
{
    var text=document.getElementById('username');
    var mail=document.getElementById('email');
    var mno=document.getElementById('mno');

    var email_re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var ph=/^\d{10}$/;
   if(text.value.length<8)
   {
       alert("enter atleast 8 digits");
       return false;
   }
   else if(email_re.test(mail)==false){
       alert(" Enter a valid email id");
       return false;
   }
   else if(ph.test(mno)==false){
    alert(" Enter a valid 10 digit phone number");
    return false;
    }

}