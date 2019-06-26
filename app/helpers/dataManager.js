import { createStore } from 'redux'
import rootReducer from './rootReducer'
import apiClient from './ApiClient'

class DataManager {
  async googleLogin() {
    const user = await apiClient.googleLogin()
    store.dispatch({ type: 'login', user })
  }

  getUsers() {
  	return apiClient.getUsers()
  }

  addEvaluation(evalutation, uid) {
  	return apiClient.addEvaluation(evalutation, uid)
  }
}

const dataManager = new DataManager()
const store = createStore(rootReducer)

export default dataManager
export { store }