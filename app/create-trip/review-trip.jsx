import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Colors} from '../../constants/Colors'
import { Link, useNavigation, useRouter } from 'expo-router';
// import {SelectTraveleList} from '../../constants/Options'
// import OptionCard from '../../components/CreateTrip/OptionCard';
import {CreateTripContext} from '../../context/CreateTripContext'

const ReviewTrip = () => {

  const navigation = useNavigation();
  const router = useRouter();
  // const [selectedBudget, setSelectedBudget] = useState();
  const {tripData} = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent:true,
      headerTitle: ''
    });
  }, []);

  const onPressContinue = () => {
    console.log('111');
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 95,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <Text style={{
        fontSize: 25,
        fontFamily: 'outfit-bold'
      }}>Review your trip</Text>

      <View style={styles.container}>
        <Text style={styles.icon}>✈️</Text>
        <View>
          <Text style={styles.textHeader}>Destination</Text>
          <Text style={styles.textContent}>{tripData.locationInfo.name}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.icon}>😝</Text>
        <View>
          <Text style={styles.textHeader}>Travalers</Text>
          <Text style={styles.textContent}>{tripData.traveler.title} ({tripData.traveler.people})</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.icon}>🗓</Text>
        <View>
          <Text style={styles.textHeader}>Selected Dates</Text>
          <Text style={styles.textContent}>{tripData.totalDays} days</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.icon}>💰</Text>
        <View>
          <Text style={styles.textHeader}>Budget</Text>
          <Text style={styles.textContent}>{tripData.budget.name}</Text>
        </View>
      </View>
      
      <TouchableOpacity
        onPress={() => onPressContinue()}
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          paddingHorizontal: 30,
          borderRadius: 15,
          marginTop: 20
        }}>
        {/* <Link href={'/create-trip/select-dates'}> */}
          <Text style={{
            color: Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize: 20,
            textAlign: 'center'
          }}>Build My Trip</Text>
        {/* </Link> */}
      </TouchableOpacity>
    </View>
  )
}

export default ReviewTrip

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 10,
    borderRadius: 15,
    marginVertical: 15
  },
  icon: {
    fontSize: 35,
    marginHorizontal: 20
  },
  textHeader: {
    fontFamily: 'outfit',
    color: Colors.GRAY,
    fontSize: 20
  },
  textContent: {
    fontFamily: 'outfit-medium',
    fontSize: 20
  }
})