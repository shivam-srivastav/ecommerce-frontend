import React from 'react';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import './App.css';
import Home from './Component/Home/Home'
import Login from './Component/Login/Login';
import Register from './Component/Register/Register'
import Profile from './Component/Profile/Profile'


function App() {
  return (<Router>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path ='/profile' component={Profile}/>
      <Route path='/register' component={Register}/>
      <Route path='/'>
        <Redirect to='/home'/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
