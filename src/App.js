import { StyleBody } from "./components/ContainerBody/styles";
import { StyleButtons, StyleFooter, StyleLineFooter } from "./components/ContainerButton/styles";
import { StyleDisplay, StyleDisplayView } from "./components/ContainerDisplay/styles";
import { Row } from "./components/StructureButtons/styles";
import { Buttons } from "./components/Buttons";

const App = () => {
  return (
    <>
      <StyleBody>
        <StyleDisplay>
          <StyleDisplayView></StyleDisplayView>
        </StyleDisplay>
        <StyleButtons>
            <Row>
              <Buttons buttonColor="#FF5959" label="C" className="btn btn_c"></Buttons>
              <Buttons buttonColor="" label="()" className="btn btn_()"></Buttons>
              <Buttons buttonColor="" label="%" className="btn btn_%"></Buttons>
              <Buttons buttonColor="" label="/" className="btn btn_/"></Buttons>
            </Row>
            <Row>
              <Buttons buttonColor="" label="7" className="btn btn_7"></Buttons>
              <Buttons buttonColor="" label="8" className="btn btn_8"></Buttons>
              <Buttons buttonColor="" label="9" className="btn btn_9"></Buttons>
              <Buttons buttonColor="" label="X" className="btn btn_x"></Buttons>
            </Row>
            <Row>
              <Buttons buttonColor="" label="4" className="btn btn_4"></Buttons>
              <Buttons buttonColor="" label="5" className="btn btn_5"></Buttons>
              <Buttons buttonColor="" label="6" className="btn btn_6"></Buttons>
              <Buttons buttonColor="" label="-" className="btn btn_-"></Buttons>
            </Row>
            <Row>
              <Buttons buttonColor="" label="1" className="btn btn_1"></Buttons>
              <Buttons buttonColor="" label="2" className="btn btn_2"></Buttons>
              <Buttons buttonColor="" label="3" className="btn btn_3"></Buttons>
              <Buttons buttonColor="" label="+" className="btn btn_+"></Buttons>
            </Row>
            <Row>
              <Buttons buttonColor="" label="+/-" className="btn btn_+/-"></Buttons>
              <Buttons buttonColor="" label="0" className="btn btn_0"></Buttons>
              <Buttons buttonColor="" label="." className="btn btn_."></Buttons>
              <Buttons buttonColor="#66FF7F" label="=" className="btn btn_="></Buttons>
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
