import React from 'react'
import { View, Text, TextInput, TouchableOpacity} from 'react-native'
import { getTopics } from '../utils/helpers'
import { Styles } from '../utils/style'

export default class AddDeck extends React.Component {
  state={
    title:''
  }

  addTopicToDeck = () => {
    const titleAdded = this.state.title
    getTopics()[titleAdded] = {
      title: titleAdded, 
      score: 0, 
      questions: []
    }
    this.props.navigation.navigate('Topics', {topic: getTopics(titleAdded)})
  }

  render() {
      return (
          <View style={Styles.Container}>
            <View >
              <Text style={Styles.Text}>What is the title of your new deck?</Text>
            </View>
            <View>
              <TextInput width={1000} style={Styles.Input} placeholder="Deck title" value={this.state.title} onChangeText={(text) => this.setState({title: text})}/>
            </View>
            <View style={Styles.SpaceViews}>
              <TouchableOpacity onPress={this.addTopicToDeck}>
                <Text style={Styles.Button}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
    }
  }
