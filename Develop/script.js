// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//made a generate passcode function that was missing//
function generatePassword(){
  // declared varibles//
  var passwordText = [];
  var characters = [];
  var lowerCase = ['a','b','c','d','e','f','g','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var number = ['0','1','2','3','4','5','6','7','8','9'];
  var symbol = ['~','!','@','#','$','%','^','&','*','(',')','+'];

  var passwordLength = prompt('Choose a password legnth. Must be no less than 8 and no more than 128 characters.');
  if (passwordLength< 8 || passwordLength > 128) {
    alert ("Does not meet character requirement");
    return;
  }
//if its not a number//
  else if (isNaN(passwordLength)) { 
    alert("Please enter numbers.");
  }
  //confirm statements//
  var confirmUpperCase = confirm('Would you like to include uppercase letters?');
  if (confirmUpperCase) {
      characters = characters.concat(upperCase);
  }

  var confirmLowerCase = confirm('Would you like to include lowercase letters?');
  if (confirmLowerCase) {
    characters = characters.concat(lowerCase);
  }

  var confirmNumber = confirm("Would you like to add numbers?");
  if (confirmNumber) {
      characters = characters.concat(number);
  }
  
  var confirmSymbol = confirm("Would you like to add symbols?");
    if (confirmSymbol) {
        characters = characters.concat(symbol);
  }

  for (var i = 0; i < passwordLength; i++) {
    console.log(i);
    passwordText += characters[Math.floor(Math.random() * characters.length)]
  }
  return passwordText;
  
}
  
  

//don't change//
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//don't change//
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
