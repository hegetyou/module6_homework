// Модуль 6.1 - Задание №1

function funcArray() {

    let arrayThree = [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 'one', null, null, null, null, null,];

    let countZero=0;
    let countString=0;
    let countables=0;
    let uncountables=0;
    let countNull=0;

    for (i = 0; i<arrayThree.length; i++) {
            if (typeof arrayThree[i] == 'string') {
            countString++;
        } else if (arrayThree[i]==null){
            countNull++;
        } else if (arrayThree[i]==0) {
            countZero++;
        } else if (arrayThree[i] % 2 === 0) {
            countables++;
        } else {
            uncountables++;
        }   
    }
  
    console.log(`В массиве: Нулей - ${countZero}, Строк - ${countString}, Нуллов - ${countNull}, Четных - ${countables}, Нечетных - ${uncountables}.`)
  }

  funcArray();