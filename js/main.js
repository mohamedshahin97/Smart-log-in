// Login page BTNs
var LogHome = document.getElementById("login-page");
var login = document.getElementById("LOGIN");
var EmailLogin = document.getElementById("Email");
var PasswordLogin = document.getElementById("Passowrd");
var regest = document.querySelector("#signupBTN");


// Home Page & BTNs
var logout = document.getElementById("logout");
var HomePg = document.getElementById("Home");
var username = document.getElementById("username");


// Registration page BTNs
var registUserName = document.getElementById("yourName");
var registrationPage = document.getElementById("Registration-page");
var SignlINK = document.querySelector("#signInBTN");
var registEmail = document.getElementById("Emailregist");
var registPassword = document.getElementById("Passowrdregist");
var signupAcc = document.getElementById("Sign-Up");
var exist = document.getElementById("exist");

var name = registUserName.value


// Home Page & (Logout BTN)
logout.addEventListener("click",function() {
    LogHome.style.display = "block";
    HomePg.style.display = "none";
    registrationPage.style.display = "none";
})

var username = localStorage.getItem("users")
if (registUserName != "") {
    document.getElementById("username").innerHTML = "<h3>Welcome</h3> " + name
    console.log(name);
}

var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}


// Registration page
SignlINK.addEventListener("click",function() {
    registrationPage.style.display = "none";
    LogHome.style.display = "block";
    HomePg.style.display = "none";
})
function isEmpty() {
    if (registUserName.value == "" || registEmail.value == "" || registPassword.value == "") {
        return false
    } else {
        return true
    }
}

function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == registEmail.value.toLowerCase()) {
        return false
        }
    }
}

signupAcc.addEventListener('click',function () {
    if (isEmpty() == false) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
}

var signUp = {
    name: registUserName.value,
    email: registEmail.value,
    password: registPassword.value,
}

if (signUpArray.length == 0) {
    signUpArray.push(signUp)
    localStorage.setItem('users', JSON.stringify(signUpArray))
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
}

if (isEmailExist() == false) {
    document.getElementById('exist').innerHTML = '<span class="text-warning m-3">This Email is Already Exist</span>'

} else {
    signUpArray.push(signUp)
    localStorage.setItem('users', JSON.stringify(signUpArray))
    document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
    
}
})


// Login page
regest.addEventListener("click",function() {
    registrationPage.style.display = "block";
    LogHome.style.display = "none";
})

function isLoginEmpty() {
    if (PasswordLogin.value == "" || EmailLogin.value == "") {
        return false
    } else {
        return true
    }
}

login.addEventListener("click",function() {
    if (PasswordLogin.value == "" || EmailLogin.value == "") {
        document.getElementById('Error').innerHTML = '<p class="text-danger m-3">All inputs is required</p>'
        return false
}

var password = PasswordLogin.value
var email = EmailLogin.value
for (var i = 0; i < signUpArray.length; i++) {
    if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
        signUpArray = JSON.parse(localStorage.getItem('users'))
        LogHome.style.display = "none";
        HomePg.style.display = "block";
        
    } else {
        document.getElementById('Error').innerHTML = '<p class="p-2 text-danger">incorrect email or password</p>'
    }
}
})
