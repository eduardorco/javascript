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
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult,
    }
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  // currentResult += enteredNumber
  //currentResult = currentResult + +userInput.value; + é igual a parseInt
  createAndWriteLog('+', initialResult, enteredNumber);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };

  logEntries.push(logEntry.operation);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = initialResult - enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = initialResult * enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = initialResult / enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
