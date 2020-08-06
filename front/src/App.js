import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/notFound';
import injectContext from './store/appContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
