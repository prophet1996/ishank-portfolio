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

// const commandLineHistoryStyles =
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
          commandLineHistory.map(history => <div>{history}</div>)}
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
