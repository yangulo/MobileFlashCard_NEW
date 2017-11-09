import React from 'react'
import { Text, View, StyleSheet, AsyncStorage, Alert, Platform } from 'react-native'
import { Constants, Notifications, Permissions } from 'expo';

const info = {
    React: { 
        title: "React",
        score: 0,
        questions: 
        [
            {
                question: "Is react a way to manage UI?",
                answer: "React is a library for managing user interfaces",
                response: "Correct",
            },
            {
                question:"Do you make Ajax requests in React using the store?",
                answer: "You use the componentDidMount lifecycle event make Ajax requests",
                response: "Incorrect",
            },
            {
                question:"Data moves unidirectional in React",
                answer: "In React the data flows from the parent component to a child component",
                response: "Correct",
            },
        ],
    },
    Redux: {
        title: "Redux",
        score: 0,
        questions: 
        [
            {
                question: "Is redux a state management container?",
                answer: "Redux is a predictable state container for JavaScript apps",
                response: "Correct"
            },
            {
                question:"Is the store modified by actions?",
                answer: "For the store to get its state, it uses a reducer",
                response: "Incorrect"
            }
        ],
    },
    ReactNative:{
        title: "React Native",
        score: 0,
        questions:
        [
            {
                question: "React native uses same web components as react",
                answer: "React Native is like React, but it uses native components instead of web components as building blocks",
                response: "Incorrect"
            },
            {
                question:"Using ScrollView you display just the necesary data as the user scrolls up or down the screen",
                answer: "The ScrollView works best to present a small amount of things of a limited size. All the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen",
                response: "Incorrect"
            }
        ]
    }
}
    
export function getTopics(topic) {
    return typeof topic === 'undefined'
    ? info
    : info[topic]
}

const NOTIFICATION_KEY = 'Flashcards:notification'


export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification () {
    return {
      title: 'Reminder!',
      body: "👋 don't forget to complete a quiz for today!",
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      }
    }
  }

export async function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if (data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if (status === 'granted') {
                  Notifications.cancelAllScheduledNotificationsAsync()

                  let tomorrow = new Date()
                  tomorrow.setDate(tomorrow.getDate() + 1)
                  tomorrow.setHours(20)
                  tomorrow.setMinutes(0)

                //   To test in 3 seconds
                //   let tomorrow = Date.now()
                //   tomorrow += 3000

                  Notifications.scheduleLocalNotificationAsync(
                    createNotification(),
                    {
                      time: tomorrow,
                      repeat: 'day',
                    }
                  )
                  AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
              })
          }
        })
    }