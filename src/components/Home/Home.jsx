import React, { Fragment, useState, useRef, useEffect } from "react";
import Suggestions from "../Suggestions/Suggestions";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import Typist from "react-typist";
import CommandLineInput from "../CommandLineInput";

const CommandLineHistoryStyles = styled.span`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.body};
  font-weight: 700;
  margin: 1.2em 1.2em;
  & > span {
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
    font-size: smaller;
    padding: 0 0.5em;
    font-weight: 400;
  }
`;

const StyledTypist = styled(Typist)`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.body};
  font-weight: 700;
  margin: 1.2em 1.2em;
  & > p {
    margin: 0px;
    font-weight: normal;
  }
  & > span {
    display: none;
  }
`;

const Home = props => {
  const mainRef = useRef(null);
  const [commandLineHistory, setcommandLineHistory] = useState([]);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [helpShown, setHelpShown] = useState(false);
  const shiftTerminalInput = newInput =>
    setcommandLineHistory([...commandLineHistory, newInput]);
  const clearCommandLineHistory = () => setcommandLineHistory([]);
  const _handleShowTutorial = () => {
    setShowTutorial(!showTutorial);
  };

  useEffect(() => {
    if (!showTutorial) mainRef.current && mainRef.current.focus();
  }, [mainRef, showTutorial, props.focusOnInput]);

  if (showTutorial) return <Redirect to="/tutorial" />;

  return (
    <Fragment>
      <Suggestions handleShowTutorial={_handleShowTutorial}></Suggestions>

      {commandLineHistory &&
        commandLineHistory.map(({ prefix, command }) => (
          <CommandLineHistoryStyles key={prefix + command}>
            {prefix}
            <span>{command}</span>
          </CommandLineHistoryStyles>
        ))}
      {showHelp && (
        <StyledTypist
          style={{ display: "none" }}
          hideWhenDone
          onTypingDone={() => setHelpShown(true)}
        >
          Hi, I'm IshankS.
          <p> I like to design and build software</p>
        </StyledTypist>
      )}
      {(helpShown || !showHelp) && (
        <CommandLineInput
          inputRef={mainRef}
          setShowHelp={setShowHelp}
          setHelpShown={setHelpShown}
          shiftTerminalInput={shiftTerminalInput}
          clearCommandLineHistory={clearCommandLineHistory}
        ></CommandLineInput>
      )}
    </Fragment>
  );
};
export default Home;
