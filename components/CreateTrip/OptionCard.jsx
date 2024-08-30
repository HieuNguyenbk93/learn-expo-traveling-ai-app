import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Colors} from '../../constants/Colors'

export default function OptionCard({option, selected}) {
  return (
    <View style={[{
      padding: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: Colors.LIGHT_GRAY,
      margin: 10,
      borderRadius: 15
    }, selected?.id === option.id && {borderWidth: 3}
    ]}>
      <View>
        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit-medium'
        }}>{option?.title}</Text>
        <Text style={{
          fontSize: 18,
          fontFamily: 'outfit',
          color: Colors.GRAY
        }}>{option?.desc}</Text>
      </View>
      <Text style={{
        fontSize: 30
      }}>{option.icon}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})