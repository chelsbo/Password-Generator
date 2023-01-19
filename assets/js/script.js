// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  alert ('Follow the following commands in order to generate your random password.');

  var inValid = true;
  while (inValid) {
    var userInputLength = prompt('How many characters would you like your password to be?\nMust be more than 8 characters.\nMust be less than 128 characters.');
    var passwordLength = Number(userInputLength);
    if (passwordLength > 7 && passwordLength < 129) {
      inValid = false;
    } else if (userInputLength === null) {
      return '';
    } else {
      alert ('Input invalid. Please try again.');
    }
  }
  alert('You chose the length of your password to be:\n' + passwordLength + ' characters.\n\nYou will now choose if your password will contain numbers, special character, upper case, and lower case characters.\nPlease choose at least 1 option.');

  inValid = true;
  while (inValid) {
    var lowerCase = confirm('Would you like your password to include: \nLower Case letters?');
    var upperCase = confirm('Would you like your password to include: \nUpper Case letters?');
    var numeric = confirm('Would you like your password to include: \nNumbers?');
    var special = confirm('Would you like your password to include: \nSpecial Characters? \nEx: ?, !, >');
    alert('You chose: \n Lower Case Letters: ' + lowerCase + '\n Upper Case Letters: ' + upperCase + '\n Numbers: ' + numeric + '\n Special Characters: ' + special);
    if (lowerCase == true || upperCase == true || numeric == true || special == true) {
      inValid = false;
    } else {
      alert('At least one character type must be selected. Please try again');
    }
  }
  
  if (lowerCase === true) {
    lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  } else {
    lowerCase = ''
  } if (upperCase === true) {
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  } else {
    upperCase = ''
  } if (numeric === true) {
    numeric = '123456789'
  } else {
    numeric = ''
  } if (special === true) {
    special = '~`!@#$%^&*()-+={}[]|/:;<>,.?'
  } else {
    special = ''
  }

  var grandString = special.concat(lowerCase, upperCase, numeric);

  var randomNumber = '';
  for (var i = 0; i < passwordLength; i++) {
    randomNumber += grandString[Math.floor(Math.random() * grandString.length)];
  } 
  return randomNumber;
}

generateBtn.addEventListener("click", writePassword);