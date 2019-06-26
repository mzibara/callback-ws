import React from 'react'
import { View, TextInput, Text, TouchableOpacity, Picker } from 'react-native'
import dataManager from '../helpers/dataManager'

class EvaluationRequest extends React.Component {
  
  state={ users: [] }

  componentDidMount() {
    dataManager.getUsers()
      .then(users => this.setState({ users }))
      .catch(console.log)
  }

  onValueChange(value, type) {
    this.setState({ [type]: value })
  }

  renderInputField(type, displayName) {
    return (
      <View>
        <Text>{displayName}</Text>
        <TextInput
          onChangeText={this.onValueChange.bind(this, type)}
        />
      </View>
    )
  }

  renderUserPicker() {
    return (
      <Picker
        selectedValue={this.state.reviewer}
        style={{ height: 50, width: 300 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ reviewer: itemValue })
        }>
        {this.state.users.map(user => {
          const { displayName, uid } = user
          return (
            <Picker.Item label={displayName} value={uid} />
          )
        })}
      </Picker>
    )
  }

  saveRequest() {
    const { reviewer, title, description } = this.state
    dataManager.addEvaluation({ title, description, reviewer }, reviewer)
      .then(console.log)
      .catch(console.log)
  }

  render() {
    return (
      <View>
        {this.renderInputField('title', 'Title')}
        {this.renderInputField('description', 'Description')}
        {this.renderUserPicker()}
        <TouchableOpacity
          onPress={this.saveRequest.bind(this)}
        >
          <Text>Request</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default EvaluationRequest