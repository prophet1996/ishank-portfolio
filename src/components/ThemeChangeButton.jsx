import { useTransition, animated } from "react-spring";
import React from "react";
import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";

const ButtonIconWrapper = styled(animated.button)`
  border: none;
  color: ${({ themeState }) => (themeState.dark ? `white` : "black")};
  font-size: large;
  background: none;
  float: right;
  margin: 1.2rem;
  font-size: 1.2rem;
  font-weight: 700;
`;

export default props => {
  const themeState = useTheme();
  const transitions = useTransition(themeState.toggle, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <ButtonIconWrapper
      className={props.className}
      themeState={themeState}
      onClick={themeState.toggle}
    >
      {transitions.map(({ item, key, props }) =>
        themeState.dark ? "🔅" : "☾"
      )}
    </ButtonIconWrapper>
  );
};
