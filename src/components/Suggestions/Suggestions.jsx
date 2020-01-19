import React from "react";
import styled from "styled-components";
import { Keyframes } from "react-spring/renderprops";

const FadedSpan = styled.span`
  color: ${props => props.theme.bodyFade};
  padding-top: 0.1em;
`;
const HighlightedSpan = styled.span`
  border: 1px solid ${props => props.theme.body};
  border-radius: 2px;
  padding: 0.1em;
  display: block;
  color: ${props => props.theme.body};
  margin: 0em 1.2em;
  cursor: pointer;
`;
const StyledSuggestion = styled.div`
  display: flex;
  margin-top: 1em;
  margin-inline-start: 1em;
`;
const Container = Keyframes.Spring(async (next, cancel, ownProps) => {
  while (true) {
    await next({
      from: { opacity: 1 },
      to: { opacity: 0.5 },
      reset: true,
      delay: 1000
    });
  }
});

const Suggestions = props => {
  return (
    <StyledSuggestion>
      <FadedSpan> >_ Type \h for help or </FadedSpan>
      <Container>
        {styles => (
          <HighlightedSpan onClick={props.handleShowTutorial} style={styles}>
            Click for a tutorial
          </HighlightedSpan>
        )}
      </Container>
    </StyledSuggestion>
  );
};
export default Suggestions;
