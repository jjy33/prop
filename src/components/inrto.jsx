import React from "react";
import styled, { css } from "styled-components";

export default function Intro() {
    return (
      <div className="Intro">
        <ThemeProvider theme={theme}>
          <Title>Hello World</Title>
          <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
          <Button>My name is Button</Button>
        </ThemeProvider>
      </div>
    );
  }

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
`;

const Container = styled.div`
  max-width: 100%;
  padding: 0px .75rem;
  margin: 0 auto;
  @media (min-width)
`





