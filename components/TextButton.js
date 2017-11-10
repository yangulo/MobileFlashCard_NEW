import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Styles } from '../utils/style'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[Styles.TextAnswerHint, style]}>{children}</Text>
    </TouchableOpacity>
  )
}