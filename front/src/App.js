import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import NotFound from './views/notFound';
import Navbar from './components/navbar';
import Register from './views/register';
import Login from './views/login';
import MainDash from './views/mainDash';
import UsersDash from './views/dashviews/usersDash';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          
            <Route exact path="/dashboard/usuarios" component={UsersDash} />
            <Route exact path="/dashboard" component={MainDash} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
