// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var possibleChars = []
var passwordArray = []
var possSpChars = ['?', '.', ',', '!', '@', '#', '$', '%', '^', '&', '*']
var possLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var possUpperCase = ['A', 'B','C', 'D', 'E', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var possNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


function userPrompts(){

}
 function generatePassword() {


 }

 function generatePassword() {

  var passwordLength = parseInt(prompt("Pick between 8 and 128 characters for your password"));
  if (!passwordLength) {
    alert("You must enter a number.");
    return generatePassword();
  }

  if (passwordLength < 8 || passwordLenth > 128) {
    alert("You need to select a length between 8 and 128.")
    return generatePassword() 
  
  }
  var LowerCaseChars = confirm("Would you like to include lowercase letters?");
  var UpperCaseChars = confirm("Would you like to include uppercase letters?");
  var NumberChars = confirm("Would you like to include numbers?");
  var SpChars = confirm("Would you like to include special characters?");

  if (!LowerCaseChars && !UpperCaseChars && !NumberChars && !SpChars) {
    alert("Must select at least one type of character set");
    generatePassword();
  }

  console.log(LowerCaseChars)
  console.log(UpperCaseChars)
  console.log(NumberChars)
  console.log(SpChars)
  console.log(passwordLength)

  if (LowerCaseChars) {
    possibleChars = possibleChars.concat(possLowerCase);
  }
  if (UpperCaseChars) {
  possibleChars = possibleChars.concat(possUpperCase);
  }
  if (NumberChars) {
    possibleChars = possibleChars.concat(possNumbers);
  }
  if(SpChars) {
    possibleChars = possibleChars.concat(possibleChars);
  }

for (var i = 0; i < passwordLength; i++) {
  var randomNum = Math.floor(Math.random() * possibleChars.length)
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
