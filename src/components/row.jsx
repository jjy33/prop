import styled from "styled-components"

const RowDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

function Row({children}) {
    return(
        <RowDiv>{children}</RowDiv>
    );
}

export default Row;