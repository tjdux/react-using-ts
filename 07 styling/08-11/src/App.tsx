import styled, { keyframes, css } from "styled-components";

const boxShadowMixin = css`
  margin: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
`;
const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const Title = styled.h1<{ $color: string; $decoration: string }>`
  color: ${(props) => props.$color};
  text-decoration: ${(props) => props.$decoration};
  animation: ${fadeIn} 2s ease-in;
`;

const BigTitle = styled(Title)`
  font-size: ${(props) => props.theme.fontSize.margin};
`;

const Wrapper = styled.section`
  padding: 2rem;
  border: 1px solid red;
`;

const BlueBorderWrapper = styled(Wrapper)<{ $shadow: boolean }>`
  border-color: ${(props) => props.theme.colors.primary};
  ${(props) => props.$shadow && boxShadowMixin}
`;

export default function App() {
  return (
    <>
      <BlueBorderWrapper $shadow>
        <Title $color="#0000ff" $decoration="underline" as="p">
          Hello, ReactJS!
        </Title>
        <BigTitle $color="#0000ff" $decoration="underline">
          Hello, Big Title!
        </BigTitle>
      </BlueBorderWrapper>
    </>
  );
}
