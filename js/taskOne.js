do {
  var endterNum = +prompt("Введите число больше 100?", 0);
} while (endterNum && (endterNum <= 100 || isNumeric(endterNum) === false));
