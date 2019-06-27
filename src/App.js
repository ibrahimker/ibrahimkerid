import React from 'react';  
import routes from './router/Routes';
import PageNotFound from './views/error/PageNotFound';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, i) => (
            <Route key="i" path={route.path} exact component={route.component}/>
          ))
        }
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
