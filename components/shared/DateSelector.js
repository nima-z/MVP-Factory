import React, { useRef } from "react";

import styled from "styled-components";

const Container = styled.div`
  min-width: 135px;
  background-color: #1bc5bd;
  border: none;
  border-radius: 5px;
  color: white;
  min-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
`;

const Selector = styled.input`
  display: none;
`;

export default function DateSelector({ type, id, name }) {
  const selectRef = useRef();
  function handler() {
    selectRef.current.onClick;
  }

  return (
    <Container onClick={handler}>
      <Selector type={type} id={id} name={name} ref={selectRef} />
      {name}
    </Container>
  );
}
