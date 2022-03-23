import styled from "styled-components";

import NoReportsLogo from "./NoReportsLogo";

const Container = styled.div`
  width: 35vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: ${(props) => props.align};
`;
const Title = styled.h2`
  margin: 0;
  color: #011f4b;
`;
const Desc = styled.p`
  color: #7e8299;
  font-weight: 700;
`;

export default function NoReport() {
  return (
    <Container align="center">
      <Title>No Reports</Title>
      <Desc>
        Currently you have no data for the reports to be generated. Once you
        start generating traffic through the Balance application the reports
        will be shown.
      </Desc>
      <NoReportsLogo />
    </Container>
  );
}
