import React from "react";
import FormLogins from "./components/FormLogins";
import { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "./components/modal";
function App() {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  return (
    <div>
      <DivUsuario>
        <DivHeader>
          <h1>INTERNACIONALIZACIÓN</h1>
        </DivHeader>
        <h3>Usuario Actual</h3>
        <input disabled value={"Formativa.ti@pucese.edu.ec"}></input>
        <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>+</Boton>
        <DivBody></DivBody>
      </DivUsuario>
      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
        <Contenido>
          <h2></h2>
          <p>
            Ay tu marido leandro brazo de linux
            <br />
            Aqui va el formulario
          </p>
        <FormLogins></FormLogins>
          
        </Contenido>
      </Modal>
    </div>
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
