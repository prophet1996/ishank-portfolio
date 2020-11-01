import React, {
  Fragment, useState, useEffect, useCallback,
} from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Typist from 'react-typist';
import Suggestions from '../Suggestions/Suggestions';
import CommandLineInput from '../CommandLineInput';

const CommandLineHistoryStyles = styled.span`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.body};
  font-weight: 700;
  margin: 1.2em 1.2em;
  & > span {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.body};
    font-size: smaller;
    padding: 0 0.5em;
    font-weight: 400;
  }
`;

const StyledTypist = styled(Typist)`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.body};
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

const Home = ({ mainRef }:any) => {
  const [commandLineHistory, setcommandLineHistory] = useState<any>([]);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [helpShown, setHelpShown] = useState(false);
  const shiftTerminalInput = (newInput) => setcommandLineHistory([...commandLineHistory, newInput]);
  const clearCommandLineHistory = () => setcommandLineHistory([]);
  const handleShowTutorial = useCallback(() => {
    setShowTutorial(!showTutorial);
  }, []);
  useEffect(() => {
    if (!showTutorial) { (mainRef?.current as any).focus(); }
  }, [mainRef, showTutorial]);

  const handleTypingDone = useCallback(
    () => setHelpShown(true), [],
  );

  const commandLineHistoryElements = commandLineHistory.map(({
    // eslint-disable-next-line no-unused-vars
    prefix, command, Render = (_:any) => <></>, args,
  }) => (
    <CommandLineHistoryStyles key={prefix + command}>
      {prefix}
      <span>{command}</span>
      <Render args={args} />
    </CommandLineHistoryStyles>
  ));

  if (showTutorial) return <Redirect to="/tutorial" />;

  return (
    <>
      <Suggestions handleShowTutorial={handleShowTutorial} />

      {commandLineHistoryElements}
      {showHelp && (
        <StyledTypist
          hideWhenDone
          onTypingDone={handleTypingDone}
        >
          Hi, I&apos;m IshankS.
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
        />
      )}
    </>
  );
};

export default Home;
