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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)