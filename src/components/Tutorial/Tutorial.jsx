import React, { Fragment } from "react";
import { WELCOME_TEXT } from "../../constants";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import AnimatedMessage from "./_AnimatedMessage";
import CommandList from "../CommandList";
import BackButton from "../shared/BackButton";

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
  console.log(BackButton);
  return (
    <Fragment>
      <BackButton></BackButton>
      {transitions.map(({ item, props, key }) => (
        <StyledWelcome style={props} key={key}>
          {item}
        </StyledWelcome>
      ))}
      <AnimatedMessage />
      <CommandList />
    </Fragment>
  );
};
export default Tutorial;
