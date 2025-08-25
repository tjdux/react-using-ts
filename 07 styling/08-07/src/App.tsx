import styled from "styled-components";

const Title = styled.h1<{ $color: string; $decoration: string }>`
  color: ${(props) => props.$color};
  text-decoration: ${(props) => props.$decoration} cadetblue;
`;

const Wrapper = styled.section`
  padding: 2rem;
  border: 1px solid red;
`;

export default function App() {
  return (
    <>
      <Wrapper>
        <Title $color="green" $decoration="line-through">
          Hello, ReactJS!
        </Title>
      </Wrapper>
    </>
  );
}
