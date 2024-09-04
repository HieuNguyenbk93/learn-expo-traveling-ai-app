import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import {Colors} from '../../constants/Colors'

const TripDetails = () => {

  const navigation = useNavigation();
  const {trip} = useLocalSearchParams();
  const [tripDetail, setTripDetail] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent:true,
      headerTitle: 'Details'
    });
    console.log('-----',JSON.parse(trip));
    let _trip = JSON.parse(trip)
    console.log();
    setTripDetail(_trip?.tripData?.day_plan)
  }, [])
  return (
    <View style={{
      padding: 25,
      paddingTop: 95,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <Text>TripDetails</Text>
      <FlatList
        data={tripDetail}
        renderItem={({item}) => {
          return (<View style={{paddingVertical: 10}}>
            <Text style={styles.textDay}>{item.day}</Text>
            {item.schedule.map((sche, index) => {
              return (<View key={index} style={{padding: 5}}>
                <Text>Location: {sche?.location}</Text>
                <Text>Time: {sche?.time}</Text>
                <Image source={sche?.image_url}
                  style={{width: '100%', height: 200}}
                />
              </View>)
            })}
          </View>)
        }}
      />
    </View>
  )
}

export default TripDetails

const styles = StyleSheet.create({
  textDay: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
  }
})