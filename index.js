
const WATER = 1000;
const MERCURY = 1355;
const OIL = 900;
const countResult =(count)=>(mass)=>mass*count; // расчет массы в зависимости от объема 

function massCounter(count, type) {  //принимает объем и тип жидк.
                                     //выводит сообщение с результатом                                      
 switch (type) {
  case "water":
    return "Weight of " + count + " metric cube of water" + " = " + countResult(count)(WATER) + " kg";
      break;
  case "oil":
    return "Weight of " + count + " metric cube of oil" + " = " + countResult(count)(OIL) + " kg";
      break;
  case "mercury":
    return "Weight of " + count + " metric cube of mercury" + " = " + countResult(count)(MERCURY) + " kg";
      break;
  }
};

const makeRandomFn = (...arguments) => {   //вывод случ. числа из массива или списка аргументов
  let numbers = [...arguments];

    if(arguments.length === 1){
      numbers = numbers[0];
    };
  const random = Math.floor(Math.random() * numbers.length);
return numbers[random];
};
