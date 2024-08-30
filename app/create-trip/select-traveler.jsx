import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Colors} from '../../constants/Colors'
import { useNavigation } from 'expo-router';
import {SelectTraveleList} from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard';
import {CreateTripContext} from '../../context/CreateTripContext'

const SelectTraveler = () => {

  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState();
  const {tripData, setTripData} = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent:true,
      headerTitle: 'SelectTraveler'
    });
  }, []);

  useEffect(() => {
    setTripData({...tripData, traveler: selectedTraveler})
  }, [selectedTraveler]);

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
      }}>Who's Travelling</Text>

      <View>
        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit',
          color: Colors.PRIMARY
        }}>Choose your traveles</Text>
        <FlatList
          data={SelectTraveleList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
            >
              <OptionCard option={item} selected={selectedTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={() => console.log('111')}
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

export default SelectTraveler