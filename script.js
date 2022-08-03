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
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passLowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var passUppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
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
var finalCharacters = [];
var newPassword = "";

function generatePassword() {
  //have to use prompts per assignment rubric
  var passwordLength = window.prompt(
    "How long would you like your password to be? (Must be a number between 8 and 128)"
  );
  //parse int takes a string and changes it to int
  var parsedLength = parseInt(passwordLength);
  //to validate if password is between 8 ands 128. may need to move
  if (parsedLength < 8 || parsedLength > 128) {
    alert(
      "Passwords must be at least 8 characters and no more than 128 characters"
    );
    return generatePassword();
  }
  //prompts are in generatePassword because they are supposed to occur after generatebtn is clicked
  var lowercase = window.confirm(
    "Does your password require lowercase letters? (Y/N)"
  );
  //console.log(lowercase);
  var uppercase = window.confirm(
    "Does your password require uppercase letters? (Y/N)"
  );
  var numbers = window.confirm("Does your password require numbers? (Y/N)");
  var symbols = window.confirm("Does your password require symbols? (Y/N)");

//
  if (lowercase || uppercase || numbers || symbols) {
    console.log("User selection passes validation");
    if (lowercase) {
      finalCharacters = finalCharacters.concat(passLowercase);
      //console.log(finalCharacters);
    }
    if (uppercase) {
      finalCharacters = finalCharacters.concat(passUppercase);
      //console.log(finalCharacters);
    }
    if (numbers) {
      finalCharacters = finalCharacters.concat(passNumbers);
      //console.log(finalCharacters);
    }
    if (symbols) {
      finalCharacters = finalCharacters.concat(passSymbols);
      console.log(finalCharacters);
    }
    for (var i = 0; i < parsedLength; i++) {
      let passwordChar =
        finalCharacters[Math.floor(Math.random() * finalCharacters.length)];
      newPassword += passwordChar;
      console.log(newPassword);
    }
  } else {
    alert("You must select at least one character set to proceed");
    generatePassword();
  }
  return newPassword;
  //use for loop to get random assortment of items from criteria for password
  /*function randomNumber(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};
  } */
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
//generatePassword with prompts is called by writePassword
generateBtn.addEventListener("click", writePassword);
