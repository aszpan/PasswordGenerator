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
// finalCharacters is the array that we will concatenate the users specified criteria
var finalCharacters = [];
//newPassword will accumulate the characters for the new password from the for loop in GeneratePassword()
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
    //if the user did not make a valid selection, calling generatePassword(); will give them the option
    //to try again
    return generatePassword();
  }
  //using .confirm because it returns a boolean
  var lowercase = window.confirm(
    "Does your password require lowercase letters? (Y/N)"
  );
  //using console.log in this function to test as I go
  //console.log(lowercase);
  var uppercase = window.confirm(
    "Does your password require uppercase letters? (Y/N)"
  );
  var numbers = window.confirm("Does your password require numbers? (Y/N)");
  var symbols = window.confirm("Does your password require symbols? (Y/N)");

//this if statement is checking to verify at least one of these conditions is met
//it is required that at least one of these options is selected to generate a password
// aka if one of these returns true, then we can proceed with password generation
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
      //console.log(finalCharacters);
    }
    for (var i = 0; i < parsedLength; i++) {
      let passwordChar =
        finalCharacters[Math.floor(Math.random() * finalCharacters.length)];
      newPassword += passwordChar;
      console.log(newPassword);
    }
    //if the user did not select any criteria, then an alert pops up
    //and generatePassword is called again, to give the user another chance at i
  } else {
    alert("You must select at least one character set to proceed");
    generatePassword();
  }
  // return newPassword allows us to access the new password for the writePassword function
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
//generatePassword with prompts is called by writePassword
generateBtn.addEventListener("click", writePassword);
