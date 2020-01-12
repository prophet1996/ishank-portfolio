import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import ThemeChangeButton from "./components/ThemeChangeButton";
import CommandLineInput from "./components/CommandLineInput";
const AppWrapper = styled.div`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  color: ${props => props.theme.body};
`;

const CommandLineHistoryStyles = styled.span`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.body};
  font-weight: 700;
  margin: 1.1em 1em;
  & > span {
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
    font-size: smaller;
    padding: 0 0.5em;
    font-weight: 400;
  }
`;
function App() {
  const mainRef = useRef(null);
  useEffect(() => {
    mainRef.current.focus();
  }, [mainRef]);

  const [commandLineHistory, setcommandLineHistory] = useState([]);

  const shiftTerminalInput = newInput =>
    setcommandLineHistory([...commandLineHistory, newInput]);
  const clearCommandLineHistory = () => setcommandLineHistory([]);
  return (
    <AppWrapper onClick={() => mainRef.current.focus()} className="App">
      <div>
        <ThemeChangeButton></ThemeChangeButton>
      </div>
      <main>
        {commandLineHistory &&
          commandLineHistory.map(({ prefix, command }) => (
            <CommandLineHistoryStyles>
              {prefix}
              <span>{command}</span>
            </CommandLineHistoryStyles>
          ))}
        <CommandLineInput
          inputRef={mainRef}
          shiftTerminalInput={shiftTerminalInput}
          clearCommandLineHistory={clearCommandLineHistory}
        ></CommandLineInput>
      </main>
    </AppWrapper>
  );
}

export default App;
