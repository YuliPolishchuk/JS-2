function fibbonachiNumberRec(num) {
  if (num < 2){
    return num;
  }
  return fibbonachiNumberRec(num - 1) + fibbonachiNumberRec(num - 2);
}
//console.log(fibbonachiNumberRec(7));

function fibbonachiNumberLoop(num) {
  var a = 0, b = 1, next = 1;
  for(var i = 2; i <= num; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return next;
};

//console.log(fibbonachiNumberLoop(3));