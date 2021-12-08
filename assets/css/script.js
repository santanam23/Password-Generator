//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
  const length = lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasSymbol, 
    hasNumber, 
    length
  );
});

//Generate password function
function generatePassword(lower,upper,number,symbol,length) {
  //1. Init pw var
  //2. Filter out unchecked types
  //3. Loop Over length call generator function for each type 
  // 4. Add final pw to the pw var and return

  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }];
  console.log('typesArr: ', typesArr)
}

// Generator Functions Character chart http://www.net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.ramdom() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.ramdom() * 26) + 97)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.ramdom() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
