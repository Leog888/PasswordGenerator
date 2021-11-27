// Assignment Code
var generateBtn = document.querySelector("#generate");

// 2 dimension array -- Contains all charachter needed for password
var charSet = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
  ];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
      var passswordType = [];
      var newPassword = "";
      getPasswordType(charSet, passswordType);
      if (passswordType.length !== 0) {
        var passwordLength = getPasswordLength();
        for(var i = 0; i<passwordLength; i++){
            newPassword += passswordType[Math.floor(Math.random() * passswordType.lastIndexOf)];
        }
      }
      return newPassword;
  };
};

function getPasswordType (allchar, useChar)){
  var promptAnswer = prompt("Would you like to use uppercase characters? (y=yes/n=no)"); //prompts the user for if they wanna use uppercase 
  if(promptAnswer !== null){                                                            // checks to make sure the user did NOT hit cancel on the prompt which would return null
    if(promptAnswer.toLowerCase() === "y" || promptAnswer.toLowerCase() === "yes"){ // checks if the user said agreeed
      userChar.push(...allChar[0].slice(0))                                          //uses the spread function to slice each individual item on the sub array into passwordType
    };
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(generateBtn)