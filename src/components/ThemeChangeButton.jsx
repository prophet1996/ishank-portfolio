import { useTransition, animated } from "react-spring";
import React from "react";
import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";

const ButtonIconWrapper = styled(animated.button)`
  border: none;
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.background};
  font-size: large;
  float: right;
  border-radius: 4px;
  margin: 1.2rem;
  font-size: 1.2rem;
  font-weight: 700;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 0.5rem 0.7rem;
  z-index: 99999;
  border: 2px solid ${props => props.theme.highLight};
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
      themestate={themeState}
      onClick={themeState.toggle}
    >
      {transitions.map(({ item, key, props }) =>
        !themeState.dark ? "🔅" : "☾"
      )}
    </ButtonIconWrapper>
  );
};
