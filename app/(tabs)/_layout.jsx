import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from '../../constants/Colors'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tabs.Screen name='mytrip'
        options={{
          tabBarLabel: 'My Trip',
          tabBarIcon: (({color}) => <Ionicons name="location-sharp" size={24} color={color} />)
        }}
      />
      <Tabs.Screen name='discover'
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: (({color}) => <Ionicons name="globe-sharp" size={24} color={color} />)
        }}
      />
      <Tabs.Screen name='profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: (({color}) => <Ionicons name="person-sharp" size={24} color={color} />)
        }}
      />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})