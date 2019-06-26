import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import Login from './login'

class ActivityList extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.currentUser.displayName}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ActivityList)