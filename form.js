
let password=document.querySelector('.password');
let con_password=document.querySelector('.con_password');
let span = document.querySelector("#message");
let passw = document.querySelector("#passw");
let validemail = document.querySelector("#validemail");
let email=document.querySelector('.email');
let submitButton= document.querySelector('.submit');
let loading_ring= document.querySelector('.loading_ring')


const alphaOnly=  (event) =>{
    var key= event.keyCode;
    return ((key>=65) || key ==8);
}


const passwordCheck=()=>{
    if(password.value===con_password.value){
       span.innerHTML='(&#10004 Passwords Match)';
       span.style.color='green'
       return true
    }else{
        span.innerHTML='(&#10008 Passwords Do Not Match)';
        span.style.color='red'
        return false
    }
}

const passwordLen=()=>{
    if(password.value.length<8){
        passw.innerHTML="(Password Must Be 8-Characters Long)"
        passw.style.color='red'
        return false
    }else{
        passw.innerHTML=""
        return true
}
}

const validEmail=()=>{
    let mailformat= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value.match(mailformat)){
        validemail.innerHTML="(&#10004 Email is valid)";
        validemail.style.color='green'
        return true
    }else{
        validemail.innerHTML="(&#10008 Email is not valid)";
        validemail.style.color='red'
        return false
    }
}

const enableButton=()=>{
    if(passwordCheck() && passwordLen()&& validEmail()){
        submitButton.disabled=false;
    }
}

const login_enableButton=()=>{
    if(passwordLen()&& validEmail()){
        submitButton.disabled=false;
    }
}

const submitForm=()=>{
    document.getElementById('container').submit();
}

const loading=()=>{
    loading_ring.style.display='inline-block'
}

const load=()=>{
    if(document.getElementById('container')){
        
        setTimeout(submitForm, 2000);

    }
}


