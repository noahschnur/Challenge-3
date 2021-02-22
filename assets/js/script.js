var generateBtn = document.querySelector("#generate");
//definitions for characters
var lower = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var upper = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', ',', '.'];

// Write password to the #password input
function writePassword() {
  //prompt for length, reminder for length if input is not a number or outside range
  var length = parseInt(prompt("How long do you want you password? Pick any length between 8 and 128 characters."));
    if (isNaN(length) || length <= 8 || length >=128) length = parseInt(prompt("Remember, the password must be between 8 and 128 characters."))
    //promt for lowercase letters
    var lower = window.confirm("Would you like to use lowercase letters in your password?");
    //promt for uppercase letters
    var upper = window.confirm("Would you like to use uppercase letters in your password?");
    //promt for numbers
    var numbers = window.confirm("Would you like to use numbers in your password?");
    //promt for special characters
    var special = window.confirm("Would you like to use special characters in your password?");
    //alert for not selecting characters
    if (!lower && !upper && !numbers && !special) {
      alert("Please select at least one character type!");
      return;
    }};
    //generate the password
    function generatePassword() {
      if (writePassword.lower) {
        for (i = 0; i < lower.length; i++);
      }
      if (writePassword.upper) {
        for (i = 0; i < upper.length; i++);
      }
      if (writePassword.numbers) {
        for (i = 0; i < numbers.length; i++);
      }
      if (writePassword.special) {
        for (i = 0; i < special.length; i++);
      }
      
      var password = "";

      for (let i = 0; i < length; i++) {
        var randomPicker = Math.floor(Math.random() * Math.floor(password.length));
      }

      console.log(password)

      document.getElementById("password").textContent = password
    }
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;    

    



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);