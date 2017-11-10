import React from 'react'
import { Constants } from 'expo'
import { View, Text} from 'react-native'
import { Styles } from '../utils/style'
import TextButton from './TextButton'
import Button from './Button'
import { getTopics, setLocalNotification, clearLocalNotification} from '../utils/helpers'

export default class Quiz extends React.Component {
    static navigationOptions = {
      title: 'Quiz',
    }

    state={
        index: 0,
        flag: false,
        end: false,
    }

    componentDidMount() {
        clearLocalNotification()
          .then(setLocalNotification)
      }

    display = () => {  
        this.setState({flag: !this.state.flag})
    }

    go(topic, response, index) {
        if (!this.state.end) {
            if (index < topic.questions.length - 1) {
                this.setState({flag: false})
                const index = this.state.index + 1
                this.setState({index: index})
                this.props.navigation.navigate('Answer', { topic: topic, response: response, index: index - 1})
            }
            else {
                this.setState({end: true})
                this.props.navigation.navigate('Answer', { topic: topic, response: response, index: index})
            }
        }
    }
    
    render() {
      const topic = this.props.navigation.state.params.topic
      return (
          <View style={Styles.Container}>
            <View>
                <Text>Questions: {this.state.index + 1} / {topic.questions.length}</Text>
            </View>
            <View>
                <Text style={Styles.Text}>{topic.questions[this.state.index].question}</Text>
                <TextButton style={Styles.Subtitle} onPress={this.display}>Answer</TextButton>
                <Text style={Styles.SubtitleText}>{this.state.flag ? topic.questions[this.state.index].answer : ''}</Text>
            </View>
            <View>
                <Button style={Styles.Button} onPress={() => this.go(topic, 'Correct', this.state.index)}>Correct</Button>
            </View>
            <View>
                <Button style={Styles.Button} onPress={() => this.go(topic, 'Incorrect', this.state.index)}>Incorrect</Button>
            </View>
          </View>
        )
    }
}