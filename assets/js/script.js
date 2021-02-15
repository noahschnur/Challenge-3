// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var txt;
  var generate = prompt("How long do you need your new password?")
    if (generate <=8){
      window.prompt("Would you like to include lowercase letters?")
    } else {
      window.alert("Please enter a number between 8 and 128")
    }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);