const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
    const logEntry ={
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: currentResult,
        newResult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}


function calculateResult(calcutionType) {

}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  // currentResult += enteredNumber
  //currentResult = currentResult + +userInput.value; + é igual a parseInt
  createAndWriteLog('+', initialResult, enteredNumber);
  writeToLog('ADD',initialResult,enteredNumber,currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = initialResult - enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
  writeToLog('SUB',initialResult,enteredNumber,currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = initialResult * enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
  writeToLog('MULT',initialResult,enteredNumber,currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = initialResult / enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
  writeToLog('DIV',initialResult,enteredNumber,currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
