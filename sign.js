function doSubmit(){
    var name = document.getElementById("fname");
    var password = document.getElementById("psw");
    var re_pass = document.getElementById("re-psw");
    if(name.value==""){
        name.focus();
        name.style.border = "1px solid Red";
        return false;
    }
    else{
        name.style.border = "none";
    }
    if(password.value =="" || password.value.length<5){
        password.focus();
        password.style.border = "1px solid Red";
        return false;
    }
    else{
        password.style.border = "none";
    }
    if(password.value !== re_pass.value){
        re_pass.focus();
        re_pass.style.border = "1px solid Red";
        return false;
    }
    else{
        re_pass.style.border = "none";
    }
    if(!document.getElementById("check").checked){
        alert("Please accept term and condition!");
        return false;
    }
    return true;
}

function doCancel(){
     
}