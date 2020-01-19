import React, { Fragment } from "react";
import { WELCOME_TEXT } from "../../constants";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import AnimatedMessage from "./_AnimatedMessage";

const StyledSpan = styled(NavLink)`
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.background};
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  position: absolute;
  margin: 1.2rem;
  top: 0px;
  left: 0px;
  border-radius: 2px;
  text-decoration: none;
  border: 2px solid ${props => props.theme.highLight};
  z-index: 99999;
  border-radius: 4px;
`;

const StyledWelcome = styled(animated.pre)`
  font-size: 7pt;
  font-family: Monospace;
  white-space: pre;
  text-align: center;
  margin: 2em;
`;

const Tutorial = () => {
  const transitions = useTransition([WELCOME_TEXT], item => item.key, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" }
  });

  return (
    <Fragment>
      <StyledSpan to="/">{"<"}</StyledSpan>
      {transitions.map(({ item, props, key }) => (
        <StyledWelcome style={props} key={key}>
          {item}
        </StyledWelcome>
      ))}
      <AnimatedMessage />
    </Fragment>
  );
};
export default Tutorial;
