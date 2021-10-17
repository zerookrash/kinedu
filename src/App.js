import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import {
  Title,
  NavContainer,
  NavContent,
  NavWrapper,
  NavItem,
} from "./AppElements";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Social from "./pages/Social";
import Physical from "./pages/Physical";

function App() {
  const [section, setSection] = useState(true);

  const getState = () => {
    setSection(!section);
  };

  return (
    <div className="App container">
      <Router>
        <NavContainer section={section}>
          <Title>Area</Title>
          <NavContent>
            <NavWrapper>
              <NavItem className={section ? "active navLink" : "navLink"}>
                <Link
                  onClick={getState}
                  className={section ? "active navLink" : "navLink"}
                  to="/"
                >
                  Physical
                </Link>
              </NavItem>
              <NavItem className={section ? "navLink2" : " active navLink2"}>
                <Link
                  onClick={getState}
                  className={section ? "navLink2" : "active navLink2"}
                  to="/social"
                >
                  Social & emotional
                </Link>
              </NavItem>
            </NavWrapper>
          </NavContent>
          <div className="line"></div>
          <div className="text">
            {section ? (
              <>
                <h2>Skill: Standing up</h2>
                <p>
                  Cras non ligula accumsan augue lobortis sagittis id at felis.
                  Vivamus ut dolor sollicitudin, rhoncus eros quis, congue ante.
                  Suspendisse porta ligula quis massa tincidunt consectetur.
                  Nulla tempor semper justo vitae facilisis. Integer luctus nisl
                  nec diam pulvinar ultricies. Sed pulvinar in magna at iaculis.
                  Nulla aliquet pellentesque justo id dignissim. Nulla non
                  faucibus dolor. Aenean id sem vitae elit ultricies mollis.
                  Vestibulum ac turpis ex. Donec ligula ex, interdum a sodales
                  id, elementum.
                </p>
              </>
            ) : (
              <>
                <h2>Skill: Secure attachment</h2>
                <p>
                  Cras non ligula accumsan augue lobortis sagittis id at felis.
                  Vivamus ut dolor sollicitudin, rhoncus eros quis, congue ante.
                  Suspendisse porta ligula quis massa tincidunt consectetur.
                  Nulla tempor semper justo vitae facilisis. Integer luctus nisl
                  nec diam pulvinar ultricies. Sed pulvinar in magna at iaculis.
                  Nulla aliquet pellentesque justo id dignissim. Nulla non
                  faucibus dolor. Aenean id sem vitae elit ultricies mollis.
                  Vestibulum ac turpis ex. Donec ligula ex, interdum a sodales
                  id, elementum.
                </p>
              </>
            )}
          </div>
        </NavContainer>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/social">
            <Social />
          </Route>
          <Route path="/">
            <Physical />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
