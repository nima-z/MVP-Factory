import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-right: 2.5rem;
  gap: 2.3rem;
  border-bottom: 2px solid #f3f6f9;
`;

export const Main = styled.div`
  min-height: 85vh;
  display: flex;
  align-items: flex-start;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const Footer = styled.div`
  height: 5vh;
  display: flex;
  align-items: center;
  padding-left: 5.5rem;
  gap: 0.5rem;
  font-weight: 700;
  color: #005b96;
`;
