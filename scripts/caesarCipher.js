const alphabet = "abcdefghijklmnopqrstuvwxyz";

const cipher = "bcdefghijklmnopqrstuvwxyza";

function caesarCipher(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (isLowerCase(string[i])) {
      newString += cipherLetter(string[i]);
    } else if (isUpperCase(string[i])) {
      newString += cipherLetter(string[i].toLowerCase()).toUpperCase();
    } else {
      newString += string[i];
    }
  }
  return newString;
}
function cipherLetter(letter) {
  const index = alphabet.indexOf(letter);
  return cipher[index];
}

function isLowerCase(letter) {
  return letter.toLowerCase() === letter && letter.toUpperCase() != letter;
}
function isUpperCase(letter) {
  return letter.toUpperCase() === letter && letter.toLowerCase() != letter;
}
module.exports = caesarCipher;
