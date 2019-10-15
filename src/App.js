import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GitStarredPage } from "pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GitStarredPage} />
      </Switch>
    </Router>
  );
}

export default App;
