// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordInput = ""

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

   var numbers = ["0123456789"];
   var special = ["\\", "/", '\"', ".", "?", "!", "@", "#", "$", "%", "^", "&" , "*", "-", "+"];
   var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
   var choice = []
   if (includeNumbers === true) {
    // choice.push(numbers);
    choice = choice.concat(numbers);
   }
   if (includeSpecial === true) {
    // choice.push(special);
    choice += choice.concat(special);
   }
   if (includeUpper === true) {
    // choice.push(upper);
    choice += choice.concat(upper);
   }
   if (includeLower === true) {
    // choice.push(lower);
    choice += choice.concat(lower);
    console.log(choice);
    // choice = choice.concat();

    for (var i = 0; i < passwordLength; i++) {
      passwordInput = passwordInput + choice.charAt(Math.floor(Math.random() * choice.length)) ;
    }
    return passwordInput;
  }
}
  //   for (var i = 0; i <passwordLength.length; i++) { 
  //      var innerChoice = passwordLength[i].length;     
  //      for (var a = 0; a < innerChoice; a++) {
  //     passwordInput = passwordInput + passwordLength[i][a][Math.floor(Math.random()) * innerChoice[i][a].length];}
  //   }
  //  }


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