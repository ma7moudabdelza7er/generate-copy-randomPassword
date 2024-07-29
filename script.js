let generateBtn = document.querySelector(".btn1");
let copyBtn = document.querySelector(".btn2");
let input = document.getElementById("password");

let password=""

generateBtn.addEventListener("click", generatePassword)
    
function generatePassword(){

let chars =
    "0123456789abcdefghijklmnopqristuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";    
    arr = chars.split("")
    for(let i=0;i<7;i++){
        random = arr[Math.floor(Math.random() * arr.length)]
        password += random
    }
    input.value=password
    password=""
}

copyBtn.addEventListener("click",copyPassword)
function copyPassword(){
    
    input.select();
    document.execCommand('copy')
}