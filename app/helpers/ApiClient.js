import { GoogleSignin } from 'react-native-google-signin'
import firebase from 'react-native-firebase'

class ApiClient {
  async googleLogin() {
    try {
      // add any configuration settings here:
      await GoogleSignin.configure({
        webClientId: "703732498925-sl644ebqupbrqmmbu189ojdh3vmoa34g.apps.googleusercontent.com",
      });

      const data = await GoogleSignin.signIn();
      const user = await GoogleSignin.getCurrentUser();

      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential)
      await this.pushUserToken()
      return firebaseUserCredential.user
    } catch (e) {
      console.error(e);
    }
  }

  async pushUserToken() {
    const { uid, displayName } = firebase.auth().currentUser
    const ref = firebase.database().ref(`/users/${uid}`)
    const token = await firebase.messaging().getToken()
    await ref.set({ uid, token, displayName })
  }

  async getUsers() {
    const ref = firebase.database().ref('/users')
    const snapshot = await ref.once('value')
    const val = snapshot.val()
    return Object.keys(val).map(key => val[key])
  }

  addEvaluation(evaluation, uid) {
    return new Promise((resolve, reject) => {
      const ref = firebase.database().ref(`/evaluations/${uid}`)
      ref.push(evaluation, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
  }
}

export default new ApiClient()