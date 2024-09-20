import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "./components/modal";
function App() {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  return (
    <div>
      <ContenedorBotones>
        <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>+</Boton>
      </ContenedorBotones>

      <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
        <Contenido>
          <h2>Quien lea esto es meco</h2>
          <p>Ay tu marido leandro brazo de linux</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            aliquid in vero ex quasi sed maiores repudiandae. Impedit magni
            repellat ducimus obcaecati deleniti quam repudiandae nam omnis esse,
            temporibus distinctio.
          </p>
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
export default App;
