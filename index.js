// Assignment Code
var generateBtn = document.querySelector("#generate");

// 2 dimension array
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
            newPassword += passswordType[Math.floor(Math.random() * passswordType.length)];
        }
      }
      return newPassword;
  };
};

function getPasswordType (allChar, userChar){
  var promptAnswer = prompt("Would you like to use uppercase characters? (y=yes/n=no)"); //prompts the user for if they wanna use uppercase 
  if(promptAnswer !== null){                                                            // checks to make sure the user did NOT hit cancel on the prompt which would return null
    if(promptAnswer.toLowerCase() === "y" || promptAnswer.toLowerCase() === "yes"){ // checks if the user said agreeed
      userChar.push(...allChar[0].slice(0))                                          //uses the spread function to slice each individual item on the sub array into passwordType
    };
  }
  else{
    return userChar.splice(0, userChar.length);         //clears the array and breaks out of the function if the user clicks on the cancel button
  };
  promptAnswer = prompt("Would you like to use lowercase characters? (y=yes/n=no)"); // same process for user pasword prompts
  if(promptAnswer !== null){
    if(promptAnswer.toLowerCase() === "y" || promptAnswer.toLowerCase() === "yes"){
      userChar.push(...allChar[1].slice(0))
    };
  }
  else{
    return userChar.splice(0, userChar.length);
  };
  promptAnswer = prompt("Would you like to use numbers? (y=yes/n=no)");
  if(promptAnswer !== null){
    if(promptAnswer.toLowerCase() === "y" || promptAnswer.toLowerCase() === "yes"){
      userChar.push(...allChar[2].slice(0))
    };
  }
  else{
    return userChar.splice(0, userChar.length);
  };
  promptAnswer = prompt("Would you like to use special characters? (y=yes/n=no)");
  if(promptAnswer !== null){
    if(promptAnswer.toLowerCase() === "y" || promptAnswer.toLowerCase() === "yes"){
      userChar.push(...allChar[3].slice(0))
    };
  }
  else{
    return userChar.splice(0, userChar.length);
  };
  if(userChar.length === 0){                                                        
    alert("Error: no character sets chosen, please choose 'yes' or 'y' for at least one option"); 
    getPasswordType(allChar, userChar);                                                          
  };
};

function getPasswordLength(){                                                                                                      
  passwordLength = prompt("How long do you want your password to be? Enter a number between 8 and 128","enter a number between 8 and 128");  // prompts user an number of charcters they would want after previous prompts 
  if(passwordLength !== null){                                                                                           
    parseInt(passwordLength);                                                                                                                                                             
    if(isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)){                                                                                  
      alert("Error: Either that wasn't between 8 and 128 or that wasn't even a number");
      getPasswordLength();                                                                                                           
    }
    return passwordLength;
  }
  else {
    return;
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(generateBtn)