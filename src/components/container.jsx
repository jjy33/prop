import styled from "styled-components"

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const ContainerDiv = styled.div`
  max-width: 540px;
  padding: 0px 0.75rem;
  margin: 0 auto;
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    max-width: 720px;
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    max-width: 960px;
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    max-width: 1140px;
  }

`;

function Container({children}) {
    return(
        <ContainerDiv>{children}</ContainerDiv>
    );
}

export default Container;