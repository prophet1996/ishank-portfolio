import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import styled from "styled-components";
import ThemeChangeButton from "./components/ThemeChangeButton";
import Tutorial from "./components/Tutorial";
import Home from "./components/Home";
import Showcase from "./components/Showcase";
import Logo from "./logo";
const AppWrapper = styled.div`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  color: ${props => props.theme.body};
`;
const Resume = lazy(() => import("./routes/Resume"));
const Resume2 = lazy(() => import("./routes/Resume"));

function App() {
  const [focusOnInput, setInputFocus] = useState(true);
  const focusOnInputHandler = () => {
    setInputFocus(!focusOnInput);
  };
  return (
    <AppWrapper onClick={focusOnInputHandler} className="App">
      <main>
        <div>
          <ThemeChangeButton></ThemeChangeButton>
        </div>
        <div>
          <Logo />
        </div>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Home focusOnInput={focusOnInput} />}
              />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/about" component={Resume2} />
              <Route exact path="/tutorial" component={Tutorial} />
              <Route exact path="/showcase" component={Showcase} />
            </Switch>
          </Suspense>
        </Router>
      </main>
    </AppWrapper>
  );
}

export default App;
