import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header";
import Dashboard from "../Dashboard";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact to="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
