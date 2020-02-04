import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
const BackButton = props => <StyledSpan to="/">{"<"}</StyledSpan>;
export default BackButton;
