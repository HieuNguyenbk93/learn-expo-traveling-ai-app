import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from '../../context/CreateTripContext'
const SearchPlace = () => {

  const navigation = useNavigation();
  const {tripData, setTripData} = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent:true,
      headerTitle: 'Search'
    })
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  const onPresMockData = () => {
    const _trip = {
      locationInfo: {
        name: 'Tp. Bắc Ninh',
        coordinates: {'lat': 21.18034572103141, 'lng': 106.05601973462136},
        photoRef: 'https://lh5.googleusercontent.com/p/AF1QipMTtpFxfleu28yEr8JpBeO30xmJ-2gfEnZ6-kZW=w408-h306-k-no',
        url: 'https://maps.app.goo.gl/AFRmmCN4VHGMmCwr8'
      }
    }
    setTripData(_trip);
    router.push('/create-trip/select-traveler')
  }

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
        onPress={() => onPresMockData()}
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