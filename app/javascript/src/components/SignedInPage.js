import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Button from './Button'

class SignedInPage extends Component {

  render ()
  {
    const { signedIn, onSignOut, onDataImports } = this.props

    if (!signedIn) {return (<Redirect to="/"/>)}
    return (
        <Fragment>
          <h2>Signed in</h2>
          <Button Delete onClick={ onSignOut }>Sign Out</Button>
          <Button New onClick={ onDataImports }>Import Data</Button>

        </Fragment>
    )
  }
}

export default SignedInPage