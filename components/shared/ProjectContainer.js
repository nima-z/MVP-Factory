import styled from "styled-components";

import ProjectBar from "../../features/ProjectBar/ProjectBar";

const Container = styled.div`
  width: 100%;
  background-color: #f1fafe;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  margin-top: 2rem;
`;

const Title = styled.h4`
  margin: 0 0 2rem 0;
`;

export default function ProjectContainer() {
  return (
    <Container>
      <Title>All Projects | All Gateways</Title>
      <ProjectBar />
      <ProjectBar />
    </Container>
  );
}
