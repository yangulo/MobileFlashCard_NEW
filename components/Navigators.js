import { TabNavigator, StackNavigator } from 'react-navigation'
import Topics from './Topics'
import Quiz from './Quiz'
import AddCard from './AddCard'
import Answer from './Answer'
import FinalScore from './FinalScore'
import DeckCard from './DeckCard'
import AddDeck from './AddDeck'

export const AppTabs = TabNavigator({
    DeckCard: {
      screen: DeckCard,
      navigationOptions: {
        tabBarLabel: 'Deck',
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Card'
      },
    },
    },{
      navigationOptions: {
        header: null
    },
  })

  export const MainNavigator = StackNavigator({
    Home: {
      screen: AppTabs,
      },
      Topics: {
        screen: Topics,
      },
      Quiz:{
        screen: Quiz,
      },
      AddCard:{
        screen: AddCard,
        navigationOptions: {
          tabBarLabel: 'Add Card'
        }
      },
      Answer:{
        screen: Answer,
        navigationOptions: {
          tabBarLabel: 'Add Card'
        }
      },
      FinalScore:{
        screen: FinalScore,
        navigationOptions: {
          tabBarLabel: 'Final Score'
        }
      },
  })