import { StyleSheet } from 'react-native'
import { purple, gray, lightGray, white, red, orange, blue, lightPurp, pink} from '../utils/colors'

export const Styles = StyleSheet.create({
    Container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: lightGray,
    }, 
    ContainerDeckCard: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        margin:10,
        backgroundColor: lightGray,
    },
    Text: {
      fontSize: 50,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    TextButton: {
      textAlign: 'center',
      color: pink,
    },
    TextAnswerHint: {
      textAlign: 'center',
      color: purple,
    },
    TextTopic: {
      fontSize: 50,
      textAlign: 'center'
    },
    DeckText: {
      fontSize: 22,
      textAlign: 'center',
    },
    Button:{
      fontSize: 22,
      marginBottom:20,
      justifyContent: 'center',
      textAlign: 'center',
    },
    SpaceViews:{
      paddingTop:30
    },
    SpaceViewsTopics:{
      paddingTop:50
    },
    Subtitle:{
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    SubtitleText:{
      fontSize: 15,
      textAlign: 'center',
    },
    Input:{
      paddingTop: 20,
      textAlign: 'center',
      fontSize: 20,
    }
  })

