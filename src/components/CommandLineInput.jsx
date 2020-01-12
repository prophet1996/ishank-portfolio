import React from "react";
import styled from "styled-components";

const CommandLineStyles = styled.span`
  display: block;
  color: ${props => props.theme.body};
  font-weight: 700;
  margin: 2em 0;
  & > input[type="text"] {
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
  }
`;

export default props => {
  const { inputRef, shiftTerminalInput, clearCommandLineHistory } = props;
  const prefix = `ishank.web.dev:/$ `;
  const _handleKeyDown = e => {
    if (inputRef.current.value.toLowerCase() === "clear") {
      clearCommandLineHistory();
      inputRef.current.value = "";
    } else if (e.key === "Enter") {
      shiftTerminalInput(prefix + inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <CommandLineStyles>
      {prefix}
      <input type="text" onKeyDown={_handleKeyDown} ref={inputRef} />
    </CommandLineStyles>
  );
};
