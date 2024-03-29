import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import NavBar from './components/NavBar'
import Games from './components/Games'
import ShowGame from './components/ShowGame'
import ShowUser from './components/ShowUser'
import EditUser from './components/EditUser'
import SignUp from './components/SignUp'
import Login from './components/Login'


import * as ROUTES from './constants/routes'
import { firebase, auth, doSignOut } from './firebase/firebase'

import './App.css'
import meeple from '../src/assets/images/meeple.jpg'


class App extends Component {

  state = {
    message: '',
    currentUser: null,
    profilePic: null
  }

  async componentDidMount() {
    auth.onAuthStateChanged(async authUser => {
      if(authUser) {
        const currentUser = await fetch(`/auth/users/${authUser.uid}`)
        const currentUserToJson = await currentUser.json()
        this.setState({ 
          currentUser: currentUserToJson[0]
        })
      } else {
        this.setState({
          currentUser: null
        })
      }
    })

  }

  doSetCurrentUser = currentUser => {
    this.setState({
      currentUser
    })
    console.log(currentUser)
  }

  signOut = () => {
    this.setState({
      currentUser: null
    })
    doSignOut()
  }



  render() {
    
    const { currentUser } = this.state

    return (

      <div className="App">
        <NavBar currentUser={ this.state.currentUser } signOut={this.signOut} />

        <div className="welcome">
          <div className="imageCenterer">
            <img className="splashImg" src={meeple}alt="meeple" />
          </div>
        </div>
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <div></div>} />
          <Route exact path={ROUTES.LOGIN} component={ Login } />
          <Route exact path={ROUTES.SIGN_UP} render={() =>  <SignUp doSetCurrentUser={this.doSetCurrentUser} />} />
          <Route exact path={`${ROUTES.USERS}/:id`} component={() => <ShowUser currentUser={this.state.currentUser}/>} />
          <Route exact path={`${ROUTES.USERS}/:id/edit`} component={() => <EditUser currentUser={this.state.currentUser}/>} />
          <Route exact path={`${ROUTES.GAMES}`} component={ Games }/>
          <Route exact path={`${ROUTES.GAMES}/:id`} component={ ShowGame } />
        </Switch>
      </div>
    );
  }
}

export default App;
