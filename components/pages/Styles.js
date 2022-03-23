import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const Menu = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding-top: 1.2rem;
  padding-right: 1.2rem;
`;

export const Info = styled.div`
  width: 35vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: ${(props) => props.align};
`;
export const Title = styled.h2`
  margin: 0;
  color: #011f4b;
`;
export const Desc = styled.p`
  color: #7e8299;
  font-weight: 700;
`;

export const Content = styled.div`
  min-height: 71vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.flex};
`;
