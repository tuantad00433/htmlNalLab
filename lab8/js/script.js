var userName = document.getElementById("username");
userName.addEventListener("keyup", validate);
var email = document.getElementById("email");
email.addEventListener("keyup", validateEmail);
var password = document.getElementById("pwd");
password.addEventListener("keyup", validatePwd);
var passwordRe = document.getElementById("rePwd");
passwordRe.addEventListener("keyup",validatePwdRe);
var fullname = document.getElementById("fullName");
fullname.addEventListener("keyup",validateFullname);
function validate() {
    var warning = document.getElementById("warningMsg1");
    if (userName.value.length < 7) {
        warning.innerHTML = "Tối thiểu 7 ký tự";
        warning.setAttribute("style", "color:red;");
    } else if ((userName.value.length >= 7) && (userName.value.length < 20)) {
        warning.innerHTML = "Hợp lệ";
        warning.style.color = "green";
    } else {
        warning.innerHTML = "Tối đa 20 ký tự";
        warning.setAttribute("style", "color:red;");
    }

}

function validateEmail() {
    var warning = document.getElementById("warningMsg2");
    if (email.value.length < 7) {
        warning.innerHTML = "Tối thiểu 7 ký tự";
        warning.setAttribute("style", "color:red;");
    } else if ((email.value.length >= 7) && (email.value.length < 20)) {
        warning.innerHTML = "Hợp lệ";
        warning.style.color = "green";
    } else {
        warning.innerHTML = "Tối đa 20 ký tự";
        warning.setAttribute("style", "color:red;");
    }

}
function validatePwd(){
    var warning = document.getElementById("warningPwd");
    if(password.value.length<7){
        warning.innerHTML = "Tối thiểu 7 ký tự";
        warning.setAttribute("style","color:red;");
    }else if ((password.value.length>=7)&&(password.value.length<20)){
        warning.innerHTML = "Hợp lệ";
        warning.style.color = "green";
    }else{
        warning.innerHTML = "Tối đa 20 ký tự";
        warning.setAttribute("style","color:red;");
    }
}
function validatePwdRe(){
    var warning = document.getElementById("warningRePwd");
   if(passwordRe.value.localeCompare(password.value)==0){
       warning.innerHTML = "Mật khẩu trùng khớp";
       warning.style.color = "green";
   }else{
       warning.innerHTML = "Mật khẩu không khớp";
       warning.style.color = "red";
   }

}
function validateFullname(){
    var warning = document.getElementById("warningFullname");
    if(fullname.value.length<7){
        warning.innerHTML = "Tối thiểu 7 ký tự";
        warning.setAttribute("style","color:red;");
    }else if ((fullname.value.length>=7)&&(fullname.value.length<20)){
        warning.innerHTML = "Hợp lệ";
        warning.style.color = "green";
    }else{
        warning.innerHTML = "Tối đa 20 ký tự";
        warning.setAttribute("style","color:red;");
    }
}