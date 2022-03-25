
function send(){
 
  var mail='salman@gmail.com';
  var password='12345';
  
    var passw=document.getElementById("Emails").value;
    var password1=document.getElementById("exampleInputPassword1").value;

    if(mail==passw && password==password1){
 
        window.location.href = "https://github.com/" ;
        alert("Email And Password Is Correct");

    }else{

      alert("The Email Or Passewrd Is Wrong");
    }
              


}