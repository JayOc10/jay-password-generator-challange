// Assignment Code
//Creating several variables into arrays. 

// var numbers = ["0","1","2","3","4","5","6","7","8","9"];
// var specialChar = ["!","@","#","$","%","^","&","*","~"];
// var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
// var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

var char = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()"
var password = ""



function generatePassword(){
  var userOpt = prompt("How long do you want your password to be", "min 8")
  var changeNum = parseInt(userOpt)

  for (let i = 0; i < changeNum; i++) {
  var randomNum = Math.floor(Math.random() * char.length)
  password += char.substring(randomNum, randomNum + 1)
  console.log(password)
  }
}




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pw = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
