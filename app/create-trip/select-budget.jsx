import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Colors} from '../../constants/Colors'
import { Link, useNavigation, useRouter } from 'expo-router';
// import {SelectTraveleList} from '../../constants/Options'
// import OptionCard from '../../components/CreateTrip/OptionCard';
import {CreateTripContext} from '../../context/CreateTripContext'

const SelectBudget = () => {

  const navigation = useNavigation();
  const router = useRouter();
  const [selectedBudget, setSelectedBudget] = useState();
  const {tripData, setTripData} = useContext(CreateTripContext);
  const ListPrice = [
    {id: 1, name: 'Cheap'},
    {id: 2, name: 'Moderate'},
    {id: 3, name: 'Luxury'},
  ]

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent:true,
      headerTitle: ''
    });
  }, []);

  const onPressContinue = () => {
    setTripData({...tripData, budget: selectedBudget});
    router.push('/create-trip/review-trip');
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
      }}>Budget</Text>

      <View>
        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit',
          color: Colors.PRIMARY
        }}>Choose Speding Habits for your trips</Text>
        <FlatList
          data={ListPrice}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[{
                backgroundColor: Colors.LIGHT_GRAY,
                padding: 10,
                paddingVertical: 20,
                marginVertical: 20,
                borderRadius: 15
              }, selectedBudget?.id === item.id && {borderWidth: 3}]}
              onPress={() => setSelectedBudget(item)}
            >
              <Text style={{
                fontSize: 25,
                fontFamily: 'outfit-medium',
                textAlign: 'center'
              }}>{item.name}</Text>
            </TouchableOpacity>
          )}
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
        {/* <Link href={'/create-trip/select-dates'}> */}
          <Text style={{
            color: Colors.WHITE,
            fontFamily: 'outfit-medium',
            fontSize: 20,
            textAlign: 'center'
          }}>Continue</Text>
        {/* </Link> */}
      </TouchableOpacity>
    </View>
  )
}

export default SelectBudget