import React from 'react'
import { Constants } from 'expo'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native'
import { Styles } from '../utils/style'
import { getTopics } from '../utils/helpers'

export default class AddCard extends React.Component {
    static navigationOptions = {
      title: 'Add a new Question',
    };
    
    state={
        question:'',
        answer:'',
        response:'',
    }

    addQuestion = () => {
        const topic = this.props.navigation.state.params.topic        
        const newQuestion = this.state.question;
        const newAnswer = this.state.answer;
        const newResponse = this.state.response;
        const question = {
            question: newQuestion,
            answer: newAnswer,
            response: newResponse,
        }
        topic.questions === 'undefined'
        ? topic.questions = [question]
        : topic.questions.push(question)
        this.props.navigation.navigate('Topics', {topic: topic})
      }
    
    render() {
      const topic = this.props.navigation.state.params.topic
      return (
          <View style={Styles.Container}>
            <KeyboardAvoidingView behavior="padding">
              <View>
                <TextInput width={1000} multiline={true} style={Styles.Input} placeholder="Add Question" value={this.state.question} onChangeText={(text) => this.setState({question: text})}/>
              </View>
              <View>
                <TextInput width={1000} multiline={true} style={Styles.Input} placeholder="Add Answer" value={this.state.answer} onChangeText={(text) => this.setState({answer: text})}/>
              </View>
              <View>
                <TextInput width={1000} style={Styles.Input} placeholder="Correct or Incorrect" value={this.state.response} onChangeText={(text) => this.setState({response: text.trim()})}/>
              </View>
              <View style={Styles.SpaceViews}>
                <TouchableOpacity>
                  <Text style={Styles.Button} onPress={this.addQuestion}>Submit</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        );
      }
    }

