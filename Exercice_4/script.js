const Password = document.querySelector('#password');
const Confirmpassword = document.querySelector('#confirmPassword');
const Boutton = document.querySelector('#btn');
Boutton.addEventListener('click',Handleverifier);

function Handleverifier (){
    if(Password.value === Confirmpassword.value){
        Password.style.border="3px green solid";
        Confirmpassword.style.border="3px green solid";
    } else{
        Password.style.border="3px red solid";
        Confirmpassword.style.border="3px red solid";
        
    }
}