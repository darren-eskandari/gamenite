import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';



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

        <h1>Hello World</h1>
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <div>home</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
