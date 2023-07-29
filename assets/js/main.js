// login var
var email_login = document.getElementById('email'),
    password_login = document.getElementById('password'),
    login_btn = document.getElementById('login');

// sign up var
var username_sign = document.getElementById('username_s'),
    email_sign = document.getElementById('email_s'),
    password_sign = document.getElementById('password_s'),
    sign_btn = document.getElementById('signup');

//home var
var hello = document.getElementById('hello'),
    logout_btn = document.getElementById('logout');




// var message
var invalidUser = document.querySelector(".mm-1");
var invalidEmail = document.querySelector(".mm-2");
var invalidpassword = document.querySelector(".mm-3");
var reqInputs = document.querySelector(".requiredInputs");

var box_sign = document.querySelector(".box-info");
var box_sign2 = document.querySelector(".box-info2");

var exitBtn = document.getElementById("exitBtn");
var exitBtn2 = document.getElementById("exitBtn2");

//array
var arr=[];
if(localStorage.getItem('users') == null){
    arr=[];
}
else{
    arr = JSON.parse(localStorage.getItem('users'));
}




// regex
var user_regx = /^[A-Za-z][A-Za-z0-9_]{4,29}$/;
var email_regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var pass_regx = /^[a-zA-Z0-9!@#$%^&*]{6,30}$/;


/*
momo
momenalaa@gmail.com
`12345467
*/


//signUp
function signUp(){

    if(is_empty()){
        reqInputs.classList.remove("d-none");
        return false;
    }

    var temp = {
        name: username_sign.value,
        email: email_sign.value,
        password: password_sign.value,
    }
    
    if (arr.length == 0) {
        arr.push(temp)
        localStorage.setItem('users', JSON.stringify(arr))
        box_sign.classList.remove("d-none");
        return true;
    }
    if (isEmailExist()) {
        box_sign2.classList.remove("d-none");
    } else {
        arr.push(temp)
        localStorage.setItem('users', JSON.stringify(arr))
        box_sign.classList.remove("d-none");
    }

}




function loginn(){

}
login_btn.addEventListener("click",loginn);



function isEmailExist(){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].email == email_sign.value) {
            return true;
        }
    }
}
function isEmail_passExist(){
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i].email == email_login.value) &&(arr[i].password == email_login.value) ) {
            return i+1;
        }
    }
}

function is_empty(){
    if(username_sign.value=="" || email_sign.value=="" || password_sign.value==""){
        return true;
    }
    return false;
}
function is_empty_l(){
    if(email_login.value=="" || password_login.value==""){
        return true;
    }
    return false;
}

// for validation the inputs
function validate(input,regex,m){
    var tempregx = regex;
    if(tempregx.test(input.value)){
        input.classList.add("isvalid");
        input.classList.remove("isinvalid");
        m.classList.add("d-none");
    }
    else{
        input.classList.add("isinvalid");
        input.classList.remove("isvalid");
        m.classList.remove("d-none");
    }

    if(input.value==""){
        input.classList.remove("isinvalid");
        input.classList.remove("isvalid");
    }
    if(username_sign.classList.contains("isvalid") && email_sign.classList.contains("isvalid") && password_sign.classList.contains("isvalid")){
        reqInputs.classList.add("d-none");
    }
}

// to change color of input box when matches the regex

username_sign.addEventListener("input", function(){
    validate(username_sign, user_regx,invalidUser);
});

email_sign.addEventListener("input", function(){
    validate(email_sign, email_regx,invalidEmail);
})
password_sign.addEventListener("input", function(){
    validate(password_sign, pass_regx,invalidpassword);
})

















function hideModal() {
    box_sign.classList.add("d-none");
    box_sign2.classList.add("d-none");
}


// close when press on X btn
exitBtn.addEventListener("click", hideModal);
exitBtn2.addEventListener("click", hideModal);


// close Modal when press exit key
document.addEventListener("keydown", function(ex){
    if(ex.key == "Escape"){
        hideModal();
    }
});

// close Modal when click outside the Modal
document.addEventListener("click", function(ex){
    if(ex.target.classList.contains("box-info")){
        hideModal();
    }
});
