import React from 'react'
import { Constants } from 'expo'
import { View, Text} from 'react-native'
import TextButton from './TextButton'
import Button from './Button'
import Quiz from './Quiz'
import { NavigationActions } from 'react-navigation'
import { Styles } from '../utils/style'

export default class Answer extends React.Component {
    static navigationOptions = {
      title: 'Answer',
    }
    
    state={
        flag: false,
        end: false,
    }

    display = () => {  
        this.setState({flag: !this.state.flag})
    }

    toHome = () => {
        const topic = this.props.navigation.state.params.topic
        const index = this.props.navigation.state.params.index
        index < topic.questions.length - 1 
        ? this.props.navigation.dispatch(NavigationActions.back()) 
        : this.props.navigation.navigate('FinalScore', { topic: topic})
    }

    score = (answer, response, topic) => {      
        if (answer === response) {
            topic.score = topic.score + 1 
            return <Text style={Styles.Text}>Yes</Text>
        }
        else{
            return <Text style={Styles.Text}>Nop</Text>
        }
    }

    render() {
      const topic = this.props.navigation.state.params.topic
      const response = this.props.navigation.state.params.response
      const index = this.props.navigation.state.params.index
      const answer = this.props.navigation.state.params.topic.questions[index].response
      return (
          <View style={Styles.Container}>
            <View>
                {this.score(answer, response, topic)}
                <TextButton style={Styles.Subtitle} onPress={this.display}>Question</TextButton>
                <Text style={Styles.SubtitleText}>{this.state.flag ? topic.questions[index].question : ''}</Text>
            </View>
            <View>
                <Button style={Styles.Button} onPress={this.toHome}>Next</Button>
            </View>
          </View>
        );
      }
    }