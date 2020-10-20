function containerCreate(elementType, firstClassName, secondClassName) {
  const elem = document.createElement(elementType);
  elem.className = firstClassName;
  elem.classList.add(secondClassName);
  return elem;
};
function inputButtonCreate(firstClassName, secondClassName, value) {
  const elem = document.createElement("input");
  elem.className = firstClassName;
  elem.classList.add(secondClassName);
  elem.value = `${value}`;
  elem.type = "button";
  return elem;
};
const calculatorAplication = containerCreate("div", 
  "calculator_aplication", "#");
const calculator = containerCreate("div",
  "calculator", "#");
const resultListContainer = () => { 
  const elem = containerCreate("div",
  "calc_result_list_container", "#");
  elem.hidden = true;
  return elem;
};
const buttonsMainContainer = containerCreate("div",
  "calc_buttons_container", "#");
const inputDisplayContainer = containerCreate("div",
  "calc_display", "calc_display_input"); 
const resultDisplayContainer = () => {                                
  const elem = containerCreate("div", "calc_display",       
  "calc_display_result_container");
  const button = inputButtonCreate("display_result_button", "#", ">");
  const resultDisplay = containerCreate("div",
  "calc_display", "display_result");
  elem.append(resultDisplay); 
  elem.append(button);
  return elem;
};
const resultListElement = (data) => {                  
  const elem = document.createElement("p");
  elem.className = "result_list_element";
  elem.style.fontSize = "20px";
  elem.style.marginLeft = "5px";
  elem.innerText = data;
  return elem;
};
const calcButtons = (data) => {
  const buttonsArr = [];
  let elem = "";
    for (let i = 0; i<data.length; i++) { 
      if (Number(data[i]) || data[i] === "0") {
        elem = inputButtonCreate("calc_button", 
          `calc_button_number_${data[i]}`, `${data[i]}`);
      }
        else if (data[i] === "=") {
          elem = inputButtonCreate("calc_button", "result_operator", 
            `${data[i]}`);
        }
          else {
            elem = inputButtonCreate("calc_button",
            `calc_button_operator_${data[i]}`, `${data[i]}`);
          };
            buttonsArr.push(elem)
    };
  return buttonsArr; 
};
const firstButtonsBlock = () => {
  const buttonsContainer = containerCreate("div", "buttons_elements",
    "buttons_container_1");
  const elem = calcButtons(["7", "8", "9", "+", "-"]);
  buttonsContainer.append(...elem);
  return buttonsContainer;
};
const secondButtonsBlock = () => {
  const buttonsContainer = containerCreate("div", "buttons_elements",
    "buttons_container_2");
  const elem = calcButtons(["4", "5", "6", "*", "/"]);
  buttonsContainer.append(...elem);
  return buttonsContainer;
};
const thirdButtonsBlock = () => {
  const buttonsContainer = containerCreate("div", "buttons_elements",
    "buttons_container_3");
  const elem = calcButtons(["1", "2", "3", "(", ")"]);
  buttonsContainer.append(...elem);
  return buttonsContainer;
};
const fourthButtonsBlock = () => {
  const buttonsContainer = containerCreate("div", "buttons_elements",
    "buttons_container_4");
  const elem = calcButtons([".", "0", "C", "AC", "="]);
  buttonsContainer.append(...elem);
  return buttonsContainer;
};
const buttonsContainerCreate = () => {
  const elem = buttonsMainContainer;
  elem.append(firstButtonsBlock());
  elem.append(secondButtonsBlock());
  elem.append(thirdButtonsBlock());
  elem.append(fourthButtonsBlock());
  return elem;
};
const calculatorApplication = () => {
  calculator.append(resultDisplayContainer());
  calculator.append(inputDisplayContainer);
  calculator.append(buttonsContainerCreate());
  calculatorAplication.append(calculator)
  calculatorAplication.append(resultListContainer());
  return calculatorAplication;
};
document.body.appendChild(calculatorApplication());
const buttons = document.querySelectorAll(".calc_button");
const inputDisplay = document.querySelector(".calc_display_input");
const resultDisplay = document.querySelector(".display_result");
const resultList = document.querySelector(".calc_result_list_container");
const resultListButton = document.querySelector(".display_result_button");
const ERROR_VALUE = `<span style="color: rgb(196, 15, 15); font-weight: 250; font-size : 22px">Error, invalid value</span>`;
const ERROR_INPUT_EMPTY = `<span style="color: rgb(196, 15, 15); font-weight: 550;">Enter a number</span>`;
const ERROR_INPUT_WIDTH = `<span style="color: rgb(196, 15, 15); font-weight: 550;">too long number</span>`;
const CLEAR = "C";
const ALL_CLEAR = "AC";
const RESULT = "=";
const inputArr = [];
const addElementToResultList = () => {
  const elem = resultListElement(resultDisplay.textContent);
  resultList.prepend(elem);
    return resultList;
};

buttons.forEach((e) => {
  e.addEventListener('click', calcInputValue);
});
resultListButton.addEventListener('click', showList);

function showList() {
  resultList.hidden = !resultList.hidden;
  resultListButton.value = resultList.hidden? ">":"<";
};
function calcInputValue() {
  let inputText = this.value;
  inputArr.push(inputText); 
    if (inputText === RESULT || inputText === CLEAR || inputText === ALL_CLEAR) {
      resultOperator(inputText);
      inputText = ""; 
    }
      else if (inputArr.length>15) {
        errorMaxWidth();
        inputText = "";
      }
        else {
          inputDisplay.innerText += inputText;
        };
};
const resultOperator = (data) => {
  switch(data) {
    case RESULT : 
      return showResult();
    case CLEAR :
      return clearInputDisplay();
    case ALL_CLEAR :
      return allClear();
  };
}; 
const clearInputDisplay = () => {
  inputDisplay.innerText = "";
  inputArr.length = 0;
};
const clearResultDisplay = () => {
  setTimeout(() => {
    resultDisplay.innerText = "";
  }, 2000);
};
const allClear = () => {
  clearInputDisplay();
  resultDisplay.innerText = "";
  resultList.innerHTML = "";
};

const errorMaxWidth  = () => {
  resultDisplay.innerHTML = ERROR_INPUT_WIDTH;
  clearInputDisplay();
  clearResultDisplay();
    return resultDisplay;
};
const errorEmpty = () => {
  resultDisplay.innerHTML = ERROR_INPUT_EMPTY;
  clearResultDisplay();
    return resultDisplay;
};
const errorValue = () => {
  resultDisplay.innerHTML = ERROR_VALUE;
  clearInputDisplay();
  clearResultDisplay();
    return resultDisplay;
};

const showResult = () => {
  try {
    const result = new Function(`return ${(inputDisplay.innerText)}`);
    const arr = Array.from(`${result()}`);
      if (result() === undefined) {
        errorEmpty();
      }
        else  if (arr.length>5) {
          resultDisplay.style.fontSize = "18px";
          resultDisplay.innerText = `${inputDisplay.innerText} = ${result()}`;
          addElementToResultList();
        }
          else {
			      resultDisplay.style.fontSize = "25px";
            resultDisplay.innerText = `${inputDisplay.innerText} = ${result()}`;
            addElementToResultList();
            clearInputDisplay();
          };
  }
  catch (err) {
    errorValue();
    console.error(err.message);
  };
  return resultDisplay;
};