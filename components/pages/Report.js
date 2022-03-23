import { Container, Menu, Title, Info, Desc, Content } from "./Styles";

import FilterReports from "../../features/filterReports/FilterReports";
import NoReport from "../shared/NoReport";
import ProjectContainer from "../shared/ProjectContainer";

export default function Report() {
  return (
    <Container>
      <Menu>
        <Info align="left">
          <Title>Reports</Title>
          <Desc>Easily generate a report of your transactions</Desc>
        </Info>
        <FilterReports />
      </Menu>

      {/* <Content flex="center">
        <NoReport />
      </Content> */}

      <Content flex="flex-start">
        <ProjectContainer />
      </Content>
    </Container>
  );
}
