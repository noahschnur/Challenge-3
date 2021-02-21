;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordLength = window.prompt("How long do you want you password? Pick any length between 8 and 128 characters.");
      if(passwordLength < 129 || passwordLength > 8) {
        console.log(passwordLength);
      } else {
        window.alert("Please pick a number between 8 and 128");
      }

    window.confirm("Would you like to use lowercase letters in your password?");
    window.confirm("Would you like to use uppercase letters in your password?");
    window.confirm("Would you like to use numbers in your password?");
    window.confirm("Would you like to use special characters in your password?");
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);