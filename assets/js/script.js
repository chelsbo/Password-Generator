// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "abcdefghijklmnopqrstuvwxyz123456789!?*&$%#"
var password = ""
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password = chars.substring(randomNumber, randomNumber +1);
   }
  passwordText.value = password;
  document.getElementById("password").value = password;
}

function copyPassword() {
 var copyText = document.getElementById("password");
 copyText.select();  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
