import React from 'react'
import { View } from 'react-native'
import { GoogleSigninButton } from 'react-native-google-signin'
import dataManager from '../helpers/dataManager'


class Login extends React.Component {

  state = {}

  _signIn() {
    this.setState({ isSigninInProgress: true })
    dataManager.googleLogin()
      .catch(console.log)
  }

  render() {
    return (
      <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn.bind(this)}
          disabled={this.state.isSigninInProgress} />
    )
  }
}

export default Login