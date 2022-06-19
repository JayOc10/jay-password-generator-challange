// Assignment Code
let generateBtn = document.querySelector("#generate");

//Creating several variables into arrays. 

let numbers = ["0","1","2","3","4","5","6","7","8","9"];
let specialChar = ["!","@","#","$","%","^","&","*","~"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

let password = "";

// functions with prompt questions
function generatePassword(){
  let userOpt = prompt("Would you like to create a password? Choose between 8 to 128 characters");
  console.log(userOpt)
// if statements 
  if(userOpt < 8 || userOpt > 128 || isNaN(parseInt(userOpt))) {
    alert("Please enter a number between 8 and 128"); 
  }
  else{
    let lowCase = confirm("Would you like to use lowerCase characters?");
    if(lowCase){password += lowerCase};

    let upCase = confirm("Would you like to use upperCase characters?");
    if (upCase){password += upperCase};

    let specialChar = confirm("Would you like to use special characters?");
    if (specialChar){password += specialChar};

    let numbers = confirm("Would you like to use numbers characters?");
    if (numbers){password += numbers};

    if(lowerCase === false && upperCase === false && specialChar === false && numbers === false){
      alert("Please select at least one character type.");
      generatePassword();
    }
  }
// results input

  let results = " ";
  for (let i = 0; i < userOpt; i++){
    results += password.charAt(Math.floor(Math.random() * password.length))
  }
  return results
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








