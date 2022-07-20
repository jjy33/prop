import styled from "styled-components"

const widthPercent = span => {
    if (!span) return;
  
    const width = (span / 12) * 100;
    return width;
  };
const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const Column = styled.div`
  float: left;
  width: ${({ xs }) => (xs ? `${widthPercent(xs)}%` : `100%`)};
  padding: 1rem;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${widthPercent(sm)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${widthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${widthPercent(lg)}%`};
  }
`;

function Col({ children, xs, sm, md, lg}) {
  return (
    <Column xs={xs} sm={sm} md={md} lg={lg}>
      {children}
    </Column>
  );
}

export default Col;