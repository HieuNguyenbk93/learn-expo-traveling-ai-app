import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router';
import {Colors} from '../../constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import {CreateTripContext} from '../../context/CreateTripContext'

export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const router = useRouter();
  // const [selectedTraveler, setSelectedTraveler] = useState();
  const {tripData, setTripData} = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent:true,
      headerTitle: ''
    });
  }, []);

  const onDateChange = (date, type) => {
    if (type === 'START_DATE' && date !== null) {
      setStartDate(date);
    }
    if (type === 'END_DATE' && date !== null) {
      setEndDate(date);
    }
  }

  const onPressContinue = () => {
    // console.log(endDate - startDate);
    const numOfDays = ((endDate - startDate) / 3600000 / 24) + 1;
    setTripData({...tripData, totalDays: numOfDays});
    router.push('/create-trip/select-budget');
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 95,
      backgroundColor: Colors.WHITE,
      height: '100%',
      gap: 20
    }}>
      <Text style={{
        fontSize: 25,
        fontFamily: 'outfit-bold'
      }}>Travel Data</Text>
      <View style={{
        marginTop: 30
      }}>
        <CalendarPicker onDateChange={onDateChange} 
          allowRangeSelection={true}
          minDate={new Date()}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE
          }}
        />
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
          <Text style={{
            color: Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize: 20,
            textAlign: 'center'
          }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})