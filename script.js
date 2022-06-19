// Assignment Code
//Creating several variables into arrays. 


let numbers = ["0","1","2","3","4","5","6","7","8","9"];
let specialChar = ["!","@","#","$","%","^","&","*","~"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

let char = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()";
let password = "";

function generatePassword(){
  let userOpt = prompt("Would you like to create a password? Choose between 8 to 128 characters");
  console.log(userOpt)

  if(userOpt < 8 || userOpt > 128 || isNaN(parseInt(userOpt))) {
    alert("Please enter a number between 8 and 128");
    
  }











}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








