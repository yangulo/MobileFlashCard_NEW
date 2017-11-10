import React from 'react'
import { gray } from './utils/colors'
import { View } from 'react-native'
import { MainNavigator } from './components/Navigators'
import { getTopics, setLocalNotification } from './utils/helpers'
import { AppStatusBar } from './components/AppStatusBar'

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <AppStatusBar backgroundColor={gray} barStyle="light-content" />
        <MainNavigator screenProps={{topics: getTopics()}}/>
      </View>
    )
  }
}




