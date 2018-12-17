function countLetter(str, letter) {
  str = str.toLowerCase();
  letter = letter.toLowerCase();
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count += 1;
    }
  }
  return count;
}

console.log(countLetter('Your goal In this kata is to Implement an difference function', 'i'));
