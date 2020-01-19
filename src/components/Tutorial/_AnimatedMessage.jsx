import React from "react";
import { WELCOME_MESSAGE } from "../../constants";
import { useTransition, animated } from "react-spring";

import styled from "styled-components";

const StyledWelcomeMessage = styled.div`
  margin: 2rem;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
`;

const WelcomeMessageTextItem = styled(animated.span)`
  margin-right: 1.5em;
`;
const WELCOME_MESSAGE_ITEMS = WELCOME_MESSAGE.split(" ");

const AnimatedMessage = props => {
  const transitions = useTransition(WELCOME_MESSAGE_ITEMS, item => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 }
  });

  return (
    <StyledWelcomeMessage>
      {transitions.map(({ item, props, key }) => {
        return (
          <WelcomeMessageTextItem style={props} key={key}>
            {item}
          </WelcomeMessageTextItem>
        );
      })}
    </StyledWelcomeMessage>
  );
};
export default AnimatedMessage;