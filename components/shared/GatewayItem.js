import styled from "styled-components";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
  min-height: 35px;
  &:nth-child(odd) {
    background-color: white;
  }
`;

const Spacer = styled.div`
  flex: 2;
`;

const Item = styled.div`
  flex: 1;
  text-align: center;
`;

export default function GatewayItem(props) {
  return (
    <Container>
      <Item>{props.date}</Item>
      <Spacer />
      <Item>{props.gateway}</Item>
      <Spacer />
      <Item>{props.transaction}</Item>
      <Spacer />
      <Item>{props.amount}</Item>
    </Container>
  );
}
