import React from 'react';
// import Home from './views/home/Home';
import routes from './router/Routes';
import PageNotFound from './views/error/PageNotFound';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {
        routes.map((route, i) => (
          <Route path={route.path} exact component={route.component}/>
        ))
      }
      <Route component={PageNotFound} />
    </Router>
  );
}

export default App;
