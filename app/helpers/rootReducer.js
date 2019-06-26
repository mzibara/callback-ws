const initialState = {
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'login':
      return { ...state, currentUser: action.user }
    default:
      return Object.assign({}, state, action.payload)
  }
}

export default rootReducer