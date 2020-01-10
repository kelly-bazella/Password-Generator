//list of variables to choose from
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = "ABCDEFGHIJKLMNOPQRSRUVWXYZ";
var numberList= "1234567890";
var specialCharacters="!#$%&()*+,-./:;<=>?@[\]^_{|}~";

var generateButton = document.querySelector("#generate");

//function that when generate password button is clicked, prompts user to enter length, which characters and then displays (based on the criteria) a password

function generatePassword(){
    var password = "";
    // ask user parameter questions
    var passwordLength = prompt("How long would you like the password to be? Type number between 8-128.");
    console.log(passwordLength);
        if (passwordLength>128){
            alert=("Password too long!");
        } else if (passwordLength<8){
            alert=("Password too short!");
        }
    var addLower = confirm("Would you like the password to include lower case letters?");
    var addUpper = confirm("Would you like the password to include upper case letters?");
    var addNumber = confirm("Would you like the password to include numbers?");
    var addCharacters = confirm("Would you like the password to include special characters?");

        //from response, build string and then randomly select from string of acceptable characters 
    var allowedCharacters = '';
    if (addLower===true){
        allowedCharacters+=lowerLetter
    }if (addUpper===true){
        allowedCharacters+=upperLetter
    }if (addNumber===true){
        allowedCharacters+=numberList
    }if(specialCharacters===true){
        allowedCharacters+=specialCharacters
    }else if ((addLower===false)&&(addUpper===false)&&(addNumber===false)&&(specialCharacters===false)){
        alert("You have to allow at least one character set! Try again.")
    }

    // for loop picking random numbers from character lists 
        for (var i = 0; i< passwordLength;i++){
        password+=allowedCharacters.charAt(Math.floor(Math.random()*allowedCharacters.length))
        } 
return password;
}
console.log(generatePassword())


generateButton.addEventListener("click",)