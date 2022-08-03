// The goal is to create an application that allows users to generate random passwords based on criteria
//that they select
// 1.) onClick of Generate button, get prompts for password criteria (length, uppercase, lowercase, numeric, special characters)
// 2.) User selects which criteria to include in password
//      -Length between 8 and 128 characters
//      -Can include:
//          -uppercase
//          -lowercase
//          -numeric
//          -special characters
// 3.) User input should be validated - at least one chracter type must be selected
// 4.) Generate password

// Variables
//if we use split function for the criteria, we can use concat later to combine
//the users requested criteria (if needed)
var passLowercase = [azertyuiopqsdfghjklmwxcvbn];
var passUppercase = [AZERTYUIOPQSDFGHJKLMWXCVBN];
var passNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var passSymbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "_",
  "=",
  "+",
  "|",
  ":",
  ";",
  ",",
  ".",
  ">",
  "/",
  "?",
  "~",
];

var passwordLength = window.prompt(
  "How long would you like your password to be? (Must be a number between 8 and 128)"
);

var lowercase = window.prompt("Does your password require lowercase letters? (Y/N)");
var uppercase = window.prompt("Does your password require uppercase letters? (Y/N)");
var numbers = window.prompt("Does your password require numbers? (Y/N)");
var symbols = window.prompt("Does your password require symbols? (Y/N)");



function generatePassword() {
  //need something to concat if prompt === y


  switch(criteria) {
  case lowercase:
    newpassword += passLowercase;
    break;
  case uppercase:
    break;
    
  case numbers:
    break;
  case symbols:
    break;
  default:
    alert("Enter at least one criteria");
}

  //to validate if password is between 8 ands 128
  if (passwordLength.length < 8 || passwordLength.length > 128) {
    alert(
      "Passwords must be at least 8 characters and no more than 128 characters"
    );
    return;
  }
}

// Write password to the #password input
function writePassword(passwordData) {
  var password = generatePassword();
  for (i = 0; i < passwordLength; i++) {
    newPassword += data[Math.floor(Math.random() * passwordData.length)];
  }
  passwordText.value = password;
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
