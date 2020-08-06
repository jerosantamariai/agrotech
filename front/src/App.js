import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import NotFound from './views/notFound';
import Test from './views/test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/test" component={Test} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
