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
import Ex1 from './views/dashviews/ex1';
import Ex2 from './views/dashviews/ex2';
import Ex3 from './views/dashviews/ex3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          
            <Route exact path="/dashboard/ex3" component={Ex3} />
            <Route exact path="/dashboard/ex2" component={Ex2} />
            <Route exact path="/dashboard/ex1" component={Ex1} />
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
