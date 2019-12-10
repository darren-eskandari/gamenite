import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Games from './components/Games'
import ShowGame from './components/ShowGame'
import SignUp from './components/SignUp'
import Login from './components/Login'



import * as ROUTES from './constants/routes'
import { firebase, auth, doSignOut } from './firebase/firebase';

import './App.css';
import meeple from '../src/assets/images/meeple.jpg'


class App extends Component {

  state = {
    message: '',
    currentUser: null,
    profilePic: null
  }

  async componentDidMount() {
    const user = await fetch('/api/v1/welcome')
    const userToJson = await user.json()
    console.log(userToJson)

    auth.onAuthStateChanged(authUser => {
      console.log('auth state change', authUser)
      authUser
      ? this.setState({ 
        currentUser: {
          displayName: authUser.email,
      }
      })
      : this.setState({ currentUser: null })
    })

  }

  doSetCurrentUser = currentUser => {
    this.setState({
      currentUser
    })
    console.log(currentUser)
  }



  render() {
    
    const { currentUser } = this.state

    return (

      <div className="App">
        <NavBar />
 
        {
          currentUser
          ? <div>
            {currentUser.displayName}
            <button onClick={doSignOut}>Sign Out</button>
            <img src={currentUser.imgUrl} />
          </div>
          : null
        }

        <div className="welcome">
          <div className="imageCenterer">
            <img className="splashImg" src={meeple}alt="meeple" />
          </div>
        </div>
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <div>home</div>} />
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route exact path={ROUTES.SIGN_UP} component={ SignUp } />
          <Route exact path={`${ROUTES.GAMES}`} component={ Games }/>
          <Route exact path={`${ROUTES.GAMES}/:id`} component={ ShowGame } />
        </Switch>
      </div>
    );
  }
}

export default App;
