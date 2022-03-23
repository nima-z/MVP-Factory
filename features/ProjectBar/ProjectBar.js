import { Container, Header, GatewayContainer, GatewayList } from "./Styles";

import GatewayItem from "../../components/shared/GatewayItem";

export default function ProjectBar(props) {
  return (
    <Container>
      <Header>
        <div>
          <h2>Project 1</h2>
        </div>
        <div>
          <span>TOTAL : 10,065 USD</span>
        </div>
      </Header>
      <GatewayContainer>
        <GatewayList>
          <GatewayItem
            date="Date"
            gateway="Gateway"
            transaction="Transaction"
            amount="Amount"
          />
          <GatewayItem
            date="32423"
            gateway="Gateway"
            transaction="74327"
            amount="3496798"
          />
          <GatewayItem
            date="32423"
            gateway="23456"
            transaction="74327"
            amount="3496798"
          />
          <GatewayItem
            date="32423"
            gateway="23456"
            transaction="74327"
            amount="3496798"
          />
        </GatewayList>
      </GatewayContainer>
    </Container>
  );
}
