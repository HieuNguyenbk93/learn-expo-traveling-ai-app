import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import {Colors} from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchPlace = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent:true,
      headerTitle: 'Search'
    })
  }, [])
  return (
    <View style={{
      padding: 25,
      paddingTop: 95,
      backgroundColor: Colors.WHITE,
      height: '100%',
      gap: 30
    }}>
      
      {/* <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: 'vn',
        }}
      /> */}
      <TouchableOpacity
        onPress={() => console.log('111')}
       style={{
        backgroundColor: Colors.PRIMARY,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        marginTop: 40
      }}>
        <Text style={{
          color: Colors.WHITE,
          fontFamily: 'outfit-medium',
          fontSize: 20,
          textAlign: 'center'
        }}>Search</Text>
      </TouchableOpacity>
      <Text style={{
        fontSize: 20,
        fontFamily: 'outfit',
        textAlign: 'center',
        color: Colors.GRAY
      }}>Click search to mock data</Text>
    </View>
  )
}

export default SearchPlace

const styles = StyleSheet.create({})