import React from "react";
import styled from "styled-components";

const CommandLineStyles = styled.span`
  display: block;
  color: ${(props) => props.theme.body};
  font-weight: 700;
  margin: 1.2em 1.2em;
  & > input[type="text"] {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.body};
  }
`;

export default (props) => {
  const {
    inputRef,
    shiftTerminalInput,
    clearCommandLineHistory,
    setShowHelp,
    setHelpShown,
  } = props;
  const prefix = `ishank.web.dev:/$ `;
  const _handleKeyDown = (e) => {
    if (inputRef.current.value === "") return;
    if (e.key === "Enter") {
      shiftTerminalInput({ prefix, command: inputRef.current.value });
      if (inputRef.current.value.toLowerCase() === `\\h`) {
        setHelpShown(false);
        setShowHelp(true);
      }
      if (inputRef.current.value.toLowerCase() === "clear") {
        clearCommandLineHistory();
      }
      if (inputRef.current.value.toLowerCase().match(/echo */)) {
        shiftTerminalInput({
          prefix: "",
          command: inputRef.current.value.slice(
            5,
            inputRef.current.value.length
          ),
        });
      }
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
