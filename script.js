// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 function getPassword () {
  let passwordLength = prompt ("How many characterisitcs would you like?")
 
  var lettrUpper = {"a"};

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Try again. Type in a value between 8 and 128")
  } 

var tall = prompt ("Do you wnat upper case"); 
  if (confirm("Do you want upper case?") {
    lettrUppercase = ""; } 

var letterLowercase = prompt("abcdefghijklmnopqrstuvwxyz");
  if (confirm("Do you want lower case?") == true) {
    letterLowercase = "Data is saved!";
  } else {
    letterLowercase = "Cancelled"}
  };
var numbersCase = prompt("0123456789");
  if (confirm("Do you want numebrs?") == true) {
  numbersCase = "Data is saved!";
} else {
  numbersCase = "Cancelled"
};

var specialsCase = prompt('!@#$%^&*()-=+[]{};|:",\<.>/?');
   if (confirm("Do you want special keys?") == true) {
      specialsCase = "Data is saved!";
   } else {
     specialsCase = "Cancelled"
   }
