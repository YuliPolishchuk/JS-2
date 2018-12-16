var num = prompt('Введите число для вывода натуральных чисел из интервала', '15');
for (var i = 2; i <= num; i++) {
  for(var j = 2; j <= i; j++) {
      if (i%j == 0) break;
  }
  if(j == i) console.log(i);
}