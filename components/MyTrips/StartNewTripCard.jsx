import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Colors} from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View style={{
      padding: 20,
      marginTop: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 25
    }}>
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{
        fontSize: 25,
        fontFamily: 'outfit-medium'
      }}>No trips planned yet</Text>
      <Text style={{
        fontSize: 20,
        fontFamily: 'outfit',
        textAlign: 'center',
        color: Colors.GRAY
      }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

      <TouchableOpacity
        onPress={() => router.push('/create-trip/search-place')}
       style={{
        backgroundColor: Colors.PRIMARY,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 15
      }}>
        <Text style={{
          color: Colors.WHITE,
          fontFamily: 'outfit-medium',
          fontSize: 20
        }}>Start a new trip</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})