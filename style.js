
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = "ABCDEFGHIJKLMNOPQRSRUVWXYZ";
var numberList= "1234567890";
var specialCharacters= "!#$%&()*+,-.:;<=>?@[]^_{|}~ ";

function generatePassword(){
    var password = "";
    var generateButton = document.querySelector("#generate");
    var display=document.querySelector("#display");
    var passwordLength = prompt("How long would you like the password to be? Type number between 8-128.");
    var addLower = confirm("Would you like the password to include lower case letters?");
    var addUpper = confirm("Would you like the password to include upper case letters?");
    var addNumber = confirm("Would you like the password to include numbers?");
    var addCharacters = confirm("Would you like the password to include special characters?");
    var allowedCharacters = '';
    if (addLower===true){
        allowedCharacters+=lowerLetter
    }if (addUpper===true){
        allowedCharacters+=upperLetter
    }if (addNumber===true){
        allowedCharacters+=numberList
    }if(addCharacters===true){
        allowedCharacters+=specialCharacters
    }else if ((addLower===false)&&(addUpper===false)&&(addNumber===false)&&(specialCharacters===false)){
        alert("You have to allow at least one character set! Try again.")
    }
        for (var i = 0; i< passwordLength;i++){
        password+=allowedCharacters.charAt(Math.floor(Math.random()*allowedCharacters.length))
        } 
        display.value=password;
}
function copy() {
    let textarea = document.getElementById("display");
    textarea.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}

