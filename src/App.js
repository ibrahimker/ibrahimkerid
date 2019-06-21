import React from 'react';
// import Home from './views/home/Home';
import routes from './router/Routes';
import PageNotFound from './views/error/PageNotFound';
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, i) => (
            <Route path={route.path} exact component={route.component}/>
          ))
        }
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
