// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var charSize = prompt("Please type the number of characters for your password") 

  if (charSize = "null") {
  alert("Please select a value between 8 and 128")
} 
  var charLow = confirm("Do you want lowercase characters?")

  var charLow = confirm("Do you want lowercase characters?")

  var charUp = confirm("Do you want uppercase characters?")
 
  var charSpe = confirm("Do you want special characters?")

  var charNum = confirm("Do you want numbers?")

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  function generatePassword() {}



if (charSize = "null") {
  alert("Please select a value between 8 and 128")
} 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


