import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Styles } from '../utils/style'

export default function Button ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[Styles.TextButton, style]}>{children}</Text>
    </TouchableOpacity>
  )
}