// @ts-nocheck
import React, {
  Suspense, lazy, useRef, useCallback,
} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
// eslint-disable-next-line no-unused-vars
import Plugins from './plugins';
import ThemeChangeButton from './components/ThemeChangeButton';
import Tutorial from './components/Tutorial';
import Home from './components/Home';
import Showcase from './components/Showcase';
import Logo from './logo';

const AppWrapper = styled.div`
  background: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.body};
`;
const Resume = lazy(() => import('./routes/Resume'));
const Resume2 = lazy(() => import('./routes/Resume'));
const Widgets = lazy(() => import('./routes/Widgets'));

function App() {
  const mainRef = useRef(null);

  const focusOnInputHandler = useCallback(() => {
    (mainRef?.current as any).focus();
  }, []);

  return (
    <AppWrapper onClick={focusOnInputHandler} className="App">
      <main>
        <div>
          <ThemeChangeButton />
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
              >
                <Home mainRef={mainRef} />
              </Route>
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/about" component={Resume2} />
              <Route exact path="/tutorial" component={Tutorial} />
              <Route exact path="/showcase" component={Showcase} />
              <Route exact path="/widgets" component={Widgets} />
            </Switch>
          </Suspense>
        </Router>
      </main>
    </AppWrapper>
  );
}

export default App;
