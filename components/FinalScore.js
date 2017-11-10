import React from 'react'
import { Constants } from 'expo'
import { View, Text} from 'react-native'
import { Styles } from '../utils/style'
import Button from './Button'
import { NavigationActions } from 'react-navigation'

export default class FinalScore extends React.Component {
  static navigationOptions = {
    title: 'Final Score',
  }
  
    toDeck = () => {
        const topic = this.props.navigation.state.params.topic
        topic.score = 0
        this.props.navigation.navigate('Topics', { topic: topic }) 
    }

    toHome = () => {
        const topic = this.props.navigation.state.params.topic
        topic.score = 0
        this.props.navigation.navigate('DeckCard', { topic: topic }) 
    }

    toQuiz = () => {
        const topic = this.props.navigation.state.params.topic
        topic.score = 0
        this.props.navigation.navigate('Quiz', { topic: topic }) 
    }

    render() {
        const topic = this.props.navigation.state.params.topic
        return (
            <View style={Styles.Container}>
                <Text style={Styles.Text}>Final Score</Text>
                <Text tyle={Styles.Subtitle}>Your final score is {topic.score} out of {topic.questions.length}</Text>
                <View>
                    <Button style={Styles.Button} onPress={this.toQuiz}>Restart Quiz</Button>
                </View>
                <View>
                    <Button style={Styles.Button} onPress={this.toDeck}>Back to {topic.title}</Button>
                </View>
                <View>
                    <Button style={Styles.Button} onPress={this.toHome}>Back to Decks</Button>
                </View>
            </View>
        )
    }
}