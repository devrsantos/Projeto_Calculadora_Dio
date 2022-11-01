import { StyleBody } from "./components/ContainerBody/styles";
import { StyleButtons, StyleFooter, StyleLineFooter } from "./components/ContainerButton/styles";
import { StyleDisplay, StyleDisplayView, StyleDisplayCalc, StyleDisplayResult } from "./components/ContainerDisplay/styles";
import { Row } from "./components/StructureButtons/styles";
import { Buttons } from "./components/Buttons";

import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [viewCalc, setViewCalc] = useState('');
  const [viewResult, setViewResult] = useState('0');

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    if (viewCalc === '') {
      setViewCalc('')
      setViewCalc(`${num}`)
      setViewResult('0')
    } else {
      setViewCalc(`${viewCalc}${num}`)
      setViewResult('0')
    }

  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setViewCalc('');
    setViewResult('0')
  }

  const handleSumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("+");
      setViewCalc(`${currentNumber} + `)
    } else {
      const sum = (Number(firstNumber) + Number(currentNumber));
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setViewCalc('');
      setViewResult(sum)
      setOperation('');
    }
  }

  const handleMinNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("-");
      setViewCalc(`${currentNumber} - `)
    } else {
      const sum = (Number(firstNumber) - Number(currentNumber));
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setViewCalc('');
      setViewResult(sum)
      setOperation('');
    }
  }

  const handleMultNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("X");
      setViewCalc(`${currentNumber} X `)
    } else {
      const sum = (Number(firstNumber) * Number(currentNumber));
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setViewCalc('');
      setViewResult(sum)
      setOperation('');
    }
  }

  const handleDivNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("/");
      setViewCalc(`${currentNumber} / `)
    } else {
      const sum = (Number(firstNumber) / Number(currentNumber));
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setViewCalc('');
      setViewResult(sum)
      setOperation('');
    }
  }

  const handlePorcNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation("%");
      setViewCalc(`${currentNumber} % `)
    } else {
      const sum = ((Number(firstNumber) / 100) * Number(currentNumber));
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setViewCalc('');
      setViewResult(sum)
      setOperation('');
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber();
          setCurrentNumber('0')
          break;
        case '-':
          handleMinNumber();
          setCurrentNumber('0')
          break;
        case 'X':
          handleMultNumber();
          setCurrentNumber('0')
          break;
        case '/':
          handleDivNumber();
          setCurrentNumber('0')
          break;
        case '%':
          handlePorcNumber();
          setCurrentNumber('0')
          break;
        default:
          break;
      }
    }
  }

  return (
    <>
      <StyleBody>
        <StyleDisplay>
          <StyleDisplayView>
            <StyleDisplayCalc disabled value={viewCalc}>
            </StyleDisplayCalc>
            <StyleDisplayResult>{viewResult}</StyleDisplayResult>
          </StyleDisplayView>
        </StyleDisplay>
        <StyleButtons>
          <Row>
            <Buttons buttonColor="#FF5959" label="C" onClick={handleOnClear}></Buttons>
            <Buttons buttonColor="" label="()" onClick={() => alert("A Implementar")}></Buttons>
            <Buttons buttonColor="" label="%" onClick={handlePorcNumber}></Buttons>
            <Buttons buttonColor="" label="/" onClick={handleDivNumber}></Buttons>
          </Row>
          <Row>
            <Buttons buttonColor="" label="7" onClick={() => { handleAddNumber("7") }}></Buttons>
            <Buttons buttonColor="" label="8" onClick={() => handleAddNumber("8")}></Buttons>
            <Buttons buttonColor="" label="9" onClick={() => handleAddNumber("9")}></Buttons>
            <Buttons buttonColor="" label="X" onClick={handleMultNumber}></Buttons>
          </Row>
          <Row>
            <Buttons buttonColor="" label="4" onClick={() => handleAddNumber("4")}></Buttons>
            <Buttons buttonColor="" label="5" onClick={() => handleAddNumber("5")}></Buttons>
            <Buttons buttonColor="" label="6" onClick={() => handleAddNumber("6")}></Buttons>
            <Buttons buttonColor="" label="-" onClick={handleMinNumber}></Buttons>
          </Row>
          <Row>
            <Buttons buttonColor="" label="1" onClick={() => handleAddNumber("1")}></Buttons>
            <Buttons buttonColor="" label="2" onClick={() => handleAddNumber("2")}></Buttons>
            <Buttons buttonColor="" label="3" onClick={() => handleAddNumber("3")}></Buttons>
            <Buttons buttonColor="" label="+" onClick={handleSumNumber}></Buttons>
          </Row>
          <Row>
            <Buttons buttonColor="" label="+/-" onClick={() => alert("A Implementar")}></Buttons>
            <Buttons buttonColor="" label="0" onClick={() => handleAddNumber("0")}></Buttons>
            <Buttons buttonColor="" label="."></Buttons>
            <Buttons buttonColor="#66FF7F" label="=" onClick={handleEquals}></Buttons>
          </Row>
          <StyleFooter>
            <StyleLineFooter />
          </StyleFooter>
        </StyleButtons>
      </StyleBody>
    </>
  );
}

export { App };
