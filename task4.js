let x = + prompt("Введите начальное число");
let y = + prompt("Введите конечное число");
function countNum(x, y) {
	
  let current = x;
  let timerId = setInterval(function () {
    console.log(current);
    if (current == y) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
countNum(x, y);