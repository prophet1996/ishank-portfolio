import React, { useRef, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import ThemeChangeButton from "./components/ThemeChangeButton";
const AppWrapper = styled.div`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  color: ${props => props.theme.body};
`;
const CommandStyles = styled.span`
  display: block;
  color: ${props => props.theme.body};
  font-weight: 700;
  margin: 2em 0;
  & > input[type="text"] {
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
  }
`;

function App() {
  const mainRef = useRef(null);
  useEffect(() => {
    mainRef.current.focus();
  }, [mainRef]);
  return (
    <AppWrapper onClick={() => mainRef.current.focus()} className="App">
      <div>
        <ThemeChangeButton></ThemeChangeButton>
      </div>
      <main>
        <CommandStyles>
          ishank.web.dev:/$ <input type="text" ref={mainRef} />
        </CommandStyles>
      </main>
    </AppWrapper>
  );
}

export default App;
