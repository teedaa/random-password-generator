// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var userInput = prompt("How many characters do you want your password to be? Enter a number between 8-128.")
  var passwordLength = (userInput);
  if (passwordLength < 8 || passwordLength > 128){
    alert("Length is invalid")

  }

}


function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

generateBtn.addEventListener("click", writePassword);

//Prompt for criteria
//length, 8-128 char
//character types, special, upper, lower, numbers
// validate has at least 1 input
//display password