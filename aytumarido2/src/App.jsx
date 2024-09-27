import React from "react";
import FormLogins from "./components/FormLogins";
import { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "./components/modal";
import { CModalBody } from "@coreui/react";
import { CModalFooter } from "@coreui/react";
import { CModalHeader } from "@coreui/react";
import { CModalTitle } from "@coreui/react";
import { CButton } from "@coreui/react";
import { CModal } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  /*const [estadoModal1, cambiarEstadoModal1] = useState(false);
  return (
    

      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
        <Contenido>
          <FormLogins></FormLogins>
        </Contenido>
      </Modal>
    </div>
  );*/
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>
        <DivUsuario>
          <DivHeader>
            <h1>INTERNACIONALIZACIÓN</h1>
          </DivHeader>
          <h3>Usuario Actual</h3>
          <input disabled value={"Formativa.ti@pucese.edu.ec"}></input>
          <br></br>
          <CButton color="primary" onClick={() => setVisible(!visible)}>
            +
          </CButton>
          <DivBody></DivBody>
        </DivUsuario>
      </div>

      <CModal
        scrollable
        size="xl"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="ScrollingLongContentExampleLabel2"
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel2">
            Documento
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <FormLogins></FormLogins>
        </CModalBody>
        <CModalFooter></CModalFooter>
      </CModal>
    </>
  );
}

const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 10px 15px 8px;
  border-radius: 5px;
  color: #fff;
  border: none;
  background: #0fb425;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  font-size: 20px;
  margin-top: 15px;

  &:hover {
    background: #0fb42581;
  }
  &:active {
    padding: 12px 17px 10px;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
const DivUsuario = styled.div`
  margin: 30px;
  padding: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  input {
    border: solid 1px #00000036;
    border-radius: 3px;
    background-color: #00000029;
    padding: 10px 5px 10px 5px;
    font-size: 15px;
    width: 230px;
  }
`;
const DivHeader = styled.div`
  text-align: center;
  color: #009ece;
`;
const DivBody = styled.div`
  border: solid 4px #000000;
`;

export default App;
