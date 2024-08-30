import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

const MyTrip = () => {

  const [userTrip, setUserTrip] = useState([])
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        height: '100%',
        paddingTop: 55,
        padding: 25
      }}
    >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 35
        }}>MyTrip 123</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={40} color="black" />
        </TouchableOpacity>
      </View>
      
      { userTrip?.length === 0 ?
        <StartNewTripCard/>
        :
        <View></View>
      }
    </View>
  )
}

export default MyTrip

const styles = StyleSheet.create({})