// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // declared varibles//
  var passwordText = [];
  var characters = [];
  var lowerCase = ['a','b','c','d','e','f','g','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var number = ['0','1','2','3','4','5','6','7','8','9'];
  var symbol = ['~','!','@','#','$','%','^','&','*','(',')','+'];
  



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
