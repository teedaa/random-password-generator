// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){
  password=""
  var userInput = prompt("How many characters do you want your password to be? Enter a number between 8-128.")
  var passwordLength = (userInput);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Length or character is invalid");
    return false;

  }
   var includeNumbers = confirm("Do you want to include numbers?");
   var includeSpecial = confirm("Do you want to include special characters?");
   var includeUpper = confirm("Do you want to include upper case?");
   var includeLower = confirm("Do you want to include lower case?");

   var numbers = ["0","1","2","3","4","5","6","7","8","9"];
   var special = ["\\", "/", '\"', ".", "?", "!", "@", "#", "$", "%", "^", "&" , "*", "-", "+"];
   var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
   var choice = []
   if (includeNumbers === true) {
    choice.push(numbers);
   }
   if (includeSpecial === true) {
    choice.push(special);
   }
   if (includeUpper === true) {
    choice.push(upper);
   }
   if (includeLower === true) {
    choice.push(lower);
   }
 
  var passwordInput = "";
    for (var i = 0; i < passwordLength; i++) {
        outerIndex = Math.floor(Math.random() * choice.length);
        innerIndex = Math.floor(Math.random() * choice[outerIndex].length);
        passwordInput = passwordInput + choice[outerIndex][innerIndex];
    }
    return passwordInput;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

generateBtn.addEventListener("click", writePassword);