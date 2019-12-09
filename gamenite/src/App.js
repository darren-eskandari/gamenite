import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar'


import * as ROUTES from './constants/routes';
import { firebase } from './firebase/firebase';

import './App.css';

class App extends Component {

  state = {
    message: '',
    currentUser: null,
    profilePic: null
  }



  render() {

    return (
      <div className="App">
        <NavBar />

        <h1>Hello World</h1>
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <div>home</div>} />
          <Route exact path={ROUTES.LOGIN} render={() => <div>login</div>} />
          <Route exact path={ROUTES.SIGN_UP} render={() => <div>sign up</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
