var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt for length
  var passwordLength = parseInt(prompt("How long do you want you password? Pick any length between 8 and 128 characters."));
    if (length < 8) {
      alert("Remember, the password must be between 8 and 128 characters.");
      return;
    }
    if (lenth > 128) {
      alert("Remember, the password must be between 8 and 128 characters.");
      return;
    }
    //promt for lowercase letters
    var lower = window.confirm("Would you like to use lowercase letters in your password?");
    //promt for uppercase letters
    var upper = window.confirm("Would you like to use uppercase letters in your password?");
    //promt for numbers
    var numbers = window.confirm("Would you like to use numbers in your password?");
    //promt for special characters
    var special = window.confirm("Would you like to use special characters in your password?");

    while (!lower && !upper && !numbers && !special) {
      alert("Please select at least one character type!");
      lower = window.confirm("Would you like to use lowercase letters in your password?");
      upper = window.confirm("Would you like to use uppercase letters in your password?");
      numbers = window.confirm("Would you like to use numbers in your password?");
      special = window.confirm("Would you like to use special characters in your password?");
    }


    var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);