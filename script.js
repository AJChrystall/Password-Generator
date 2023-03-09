// Assignment code here

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialChars) {
    var charset = "";
    if (includeLowerCase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUpperCase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      charset += "0123456789";
    }
    if (includeSpecialChars) {
      charset += "!@#$%^&*()_+";
    }
    if (charset === "") {
      alert("Invalid character set! Please include at least one character set.");
      return "";
    }
    
    var password = "";
    for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var passwordLength = prompt("Please enter the desired length of your password (must be between 8 and 128 characters):");
    
    // Validate the password length
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length! Please enter a number between 8 and 128.");
      return;
    }
    
    var includeLowerCase = confirm("Do you want to include lowercase letters?");
    var includeUpperCase = confirm("Do you want to include uppercase letters?");
    var includeNumbers = confirm("Do you want to include numbers?");
    var includeSpecialChars = confirm("Do you want to include special characters?");
    
    var password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialChars);
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  