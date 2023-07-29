// login var
var email_l = document.getElementById('email'),
    password_l = document.getElementById('password'),
    login_btn = document.getElementById('login');

// sign up var
var username_sign = document.getElementById('username'),
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
var user_regx = /^[A-Za-z][A-Za-z0-9_]{3,29}$/;
var email_regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var pass_regx = /^[a-zA-Z0-9!@#$%^&*]{6,30}$/;


/*
momo
momenalaa@gmail.com
`12345467
*/

var username_session = localStorage.getItem('loginsession')
if (username_session) {
    hello.innerHTML = "Hello, " + username_session;
}



//signUp
function signUp(){

    if(is_empty()){
        reqInputs.classList.remove("d-none");
        return false;
    }

    var temp = {
        name: username_sign.value,
        email: email_l.value,
        password: password_l.value,
    }
    if(username_sign.classList.contains("isvalid") && email_l.classList.contains("isvalid") && password_l.classList.contains("isvalid")){
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

}





function loginn(){
    if(email_l.value=="" || password_l.value==""){
        reqInputs.classList.remove("d-none");
    }
    else{
        var pass = password_l.value;
        var em = email_l.value;
    
        if(isEmail_passExist(em, pass)){
            localStorage.setItem('loginsession', arr[isEmail_passExist(em, pass)-1].name);
            location.replace("home.html");
        }
        else{
            reqInputs.classList.remove("d-none");
            reqInputs.innerHTML="<h6>incorrect Email or password</h6>";
        }
    }
}



function logout() {
    localStorage.removeItem('loginsession');
    location.replace("index.html");
}

// console.log(location.hostname.replace("signUp.html"));

// window.location = 'http://127.0.0.1:5500/';




function isEmailExist(){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].email == email_l.value) {
            return (i+1);
        }
    }
}
function isEmail_passExist(em, pass){
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i].email == em) &&(arr[i].password == pass) ) {
            return true;
        }
    }
}

function is_empty(){
    if(username_sign.value=="" || email_l.value=="" || password_l.value==""){
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
    if(location.pathname.includes("signup.html")){
        if(username_sign.classList.contains("isvalid") && email_l.classList.contains("isvalid") && password_l.classList.contains("isvalid")){
            reqInputs.classList.add("d-none");
        }
    }
    else{
        if(email_l.classList.contains("isvalid") && password_l.classList.contains("isvalid")){
            reqInputs.classList.add("d-none");
        }
    }
}










function hideModal() {
    box_sign.classList.add("d-none");
    box_sign2.classList.add("d-none");
}

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





function secret(){
    document.querySelector(".secret-btn").classList.add("d-none");
    document.querySelector(".secret-btn2").classList.remove("d-none");
    document.querySelector(".iframe-btn").classList.remove("d-none");
}
function close_(){
    document.querySelector(".secret-btn2").classList.add("d-none");
    document.querySelector(".iframe-btn").classList.add("d-none");
    document.querySelector(".secret-btn").classList.remove("d-none");
}