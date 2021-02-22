var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt for length
  var length = Number(prompt("How long do you want you password? Pick any length between 8 and 128 characters."));
    if (isNaN(length) || length <= 8 || length >=128) length = Number(prompt("Remember, the password must be between 8 and 128 characters."))
    //promt for lowercase letters
    var lower = window.confirm("Would you like to use lowercase letters in your password?");
    //promt for uppercase letters
    var upper = window.confirm("Would you like to use uppercase letters in your password?");
    //promt for numbers
    var numbers = window.confirm("Would you like to use numbers in your password?");
    //promt for special characters
    var special = window.confirm("Would you like to use special characters in your password?");

    if (!lower && !upper && !numbers && !special) {
      alert("Please select at least one character type!");
      return;
    }};
    
    function generatePassword() {
      var password = "";
      
      var allowed = {};
        if (lower) password += rando(allowed.lower = "qwertyuiopasdfghjklzxcvbnm");
        if (upper) password += rando(allowed.upper = "QWERTYUIOPASDFGHJKLZXCVBNM");
        if (numbers) password += rando(allowed.number = "0123456789");
        if (special) password += rando(allowed.special = "!@#$%^&*(){}[]=<>/,.");
    
      for (var i = password.length; i < length; i++) password =+ rando(rando((allowed).value));
      document.getElementById("password").value = randoSequence(password).join("");
    }
    
    var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;    

    



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);