var generateBtn = document.querySelector("#generate");
//definitions for characters
var characterArray = [];
var lowerCh = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var upperCh = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var numbersCh = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCh = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', ',', '.'];

// Write password to the #password input
function writePassword() {
  //prompt for length, reminder for length if input is not a number or outside range
  var length = "";
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
    };
    
    if (lower===true) {
      characterArray.push(lowerCh);
    }
    if (upper===true) {
      characterArray.push(upperCh);
    }
    if (numbers===true) {
      characterArray.push(numbersCh);
    }
    if (special===true) {
      characterArray.push(specialCh);
    }
}
    //generate the password
    function generatePassword() {  
      
      var randomPassword = "";

      for (let i = 0; i < length; i++) {
        var randomPassword = randomPassword + characterArray(Math.floor(Math.random() * characterArray.length));
      
      console.log(randomPassword);
      }
      
      document.getElementById("password").textContent = randomPassword
    }
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);