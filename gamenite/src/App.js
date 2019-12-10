import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar'
import ShowGame from './components/ShowGame'
import Games from './components/Games'


import meeple from '../src/assets/images/meeple.jpg'

import * as ROUTES from './constants/routes';
import { firebase } from './firebase/firebase';


import './App.css';


class App extends Component {

  state = {
    message: '',
    currentUser: null,
    profilePic: null
  }

  async componentDidMount() {
    const user = await fetch('/auth')
    const userToJson = await user.json()
    console.log(userToJson)
  }



  render() {

    return (
      <div className="App">
        <NavBar />

        <div className="welcome">
          <div className="imageCenterer">
            <img className="splashImg" src={meeple}/>
          </div>
        </div>
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <div>home</div>} />
          <Route exact path={ROUTES.LOGIN} render={() => <div>login</div>} />
          <Route exact path={ROUTES.SIGN_UP} render={() => <div>sign up</div>} />
          <Route exact path={`${ROUTES.GAMES}`} component={ Games }/>
        </Switch>
      </div>
    );
  }
}

export default App;
