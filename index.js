const login_box = document.getElementById("login");
const signup_box = document.querySelector(".signup_box");
const signup = document.getElementById("signup");

function function_1(){
    if(login_box.style.display == "block"){
        login_box.style.display = "none"
        signup_box.style.display = "block"
    }else{
        login_box.style.display = "block"
    }}

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const email_2 = document.getElementById("email_2");
    const password_2 = document.getElementById("password_2");
    const confirm_password = document.getElementById("confirm_password");
    const but_log = document.getElementById("but_log");
    const but_sig = document.getElementById("but_sig");

    but_log.addEventListener("click", (event) => {
        event.preventDefault();
        if(email.value == ""){
            Error(email)
        }
    })
    but_log.addEventListener("click", (event) => {
        event.preventDefault();
        if(password.value == ""){
            Error(password,)
        }else{
            thrue(password)
        }
    })

    but_sig.addEventListener("click", (event) => {
        event.preventDefault();
        if(email_2.value == ""){
            Error(email_2)
        }else{
            thrue(email)
        }
    })

    but_sig.addEventListener("click", (event) => {
        event.preventDefault();
        if(password_2.value == ""){
            Error(password_2)
        }else{
            password_2(password_2)
        }
    })
    but_sig.addEventListener("click",(event) => {
        event.preventDefault();
        if(confirm_password.value == ""){
            Error(confirm_password)
        }else{
            thrue(confirm_password)
        }
    })

    function Error(element) {
        element.style.border = "2px solid red";
    };

    function thrue (element) {
        element.style.border = "2px solid green"
    }