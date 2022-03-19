import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.p`
  font-weight: 700;
  color: #005b96;
`;
const ImageContainer = styled.div``;
const Image = styled.img``;

export default function Profile() {
  return (
    <Container>
      <ImageContainer>
        <Image src="" alt="Image" />
      </ImageContainer>
      <Title>John Doe</Title>
    </Container>
  );
}
