import React from 'react'
import { Constants } from 'expo'
import { View, Text, TouchableOpacity} from 'react-native'
import { Styles } from '../utils/style'

export default class Topics extends React.Component {
  static navigationOptions = {
    title: 'Topic',
  }

  startQuiz = (topic) => {
    if(topic.questions.length>0){
      this.props.navigation.navigate('Quiz', {topic: topic})
    }
  }

  render() {
    const topic = this.props.navigation.state.params.topic
    return (
        <View style={Styles.Container}>
          <View>
            <Text style={Styles.TextTopic}>{topic.title}</Text>
            <View>
              <Text style={Styles.Subtitle}>{topic.questions.length} Cards</Text>
            </View>
          </View>
          <View style={Styles.SpaceViewsTopics}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard', {topic: topic})}>
              <Text style={Styles.Button}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.startQuiz(topic)}}>
              <Text style={Styles.Button}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}