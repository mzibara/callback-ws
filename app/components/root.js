import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import Login from './login'
import ActivityList from './activityList'
import EvaluationRequest from './evaluationRequest'

class Root extends React.Component {
  render() {
    if (!this.props.currentUser) return <Login/>
    return <EvaluationRequest/>
    return <ActivityList/>
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Root)