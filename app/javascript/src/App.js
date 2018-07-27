import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { signOut } from './api/auth'
import  SignInPage  from './components/SignInPage'
import  SignedInPage  from './components/SignedInPage'
import { dataImports } from './api/importData'


class App extends Component {
  
  store = this.props.store

  onSignOut = () => {
    signOut()
    .then((res) => {
      this.store.setState({ user: null })
    })
    .catch((error) => {
      res.status(404).json(error)
    })
  }

  onSignInResponse = (data) => {
    this.store.setState({ user: data })
  }
  
  onDataImports = () => {
    dataImports()
    .then((res) => {
      console.log("import res:", res)
    })
  }

  render() {
    const store = this.store
    const { user } = store.state
    const signedIn = !!user

    return (
        <Router>
          <div className="App">
            <Switch>

              <Route path='/' exact render={ () => (
                  <SignInPage store={store} signedIn={ signedIn } onSignInResponse={ this.onSignInResponse }/>
              )}/>

              <Route path='/app' exact render={ () => (
                  <SignedInPage store={store} signedIn={ signedIn } onSignOut={ this.onSignOut } onDataImports={this.onDataImports}/>
              )}/>

            </Switch>
          </div>
        </Router>
    )
  }

  componentWillMount() {

  }
}

export default App
