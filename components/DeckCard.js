import React, {Component} from 'react'
import { getTopics } from '../utils/helpers'
import { Styles } from '../utils/style'
import { View, Text, FlatList, TouchableOpacity} from 'react-native'

export default class DeckCard extends Component {

    renderItem = ({item}) => {
        return(
            <View key={item.title}>
                <TouchableOpacity style={Styles.ContainerDeckCard} onPress={() => this.props.navigation.navigate('Topics', { topic: item })}>
                    <Text style={Styles.DeckText}>{item.title}</Text>
                    <Text>{item.questions.length} Cards</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() { 
        const topics = this.props.screenProps.topics
        const topicList = Object.keys(topics).map((key) => {
            return topics[key]
        })
        return(
            <View>
                <FlatList
                    data={topicList}
                    renderItem={this.renderItem}/> 
            </View>
        )
    }
}
