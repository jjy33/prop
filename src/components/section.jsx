import styled from "styled-components"

const SectionDiv = styled.div`
    display: block;
`;

function Section({children}) {
    return(
        <SectionDiv>{children}</SectionDiv>
    );
}

export default Section;