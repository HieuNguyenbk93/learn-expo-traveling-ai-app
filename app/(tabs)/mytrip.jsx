import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../configs/FirebaseConfig';

const MyTrip = () => {

  const [userTrip, setUserTrip] = useState([]);
  const user = auth.currentUser;
  useEffect(() => {
    user && GetMyTrips();
  }, [user])
  const GetMyTrips = async () => {
    console.log('---');
    setUserTrip([]);
    const q = query(collection(db, "UserTrips"), where('userEmail', '==', user.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, '=>', doc.data())
      console.log(doc.data().tripData.flight);
      setUserTrip(prev => [...prev, doc.data()])
    });
    console.log(userTrip);
    // console.log(querySnapshot);
  }

  const onPressItem = (data) => {
    console.log(data);
  }

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
        }}>MyTrip</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={40} color="black" />
        </TouchableOpacity>
      </View>
      
      { userTrip?.length === 0 ?
        <StartNewTripCard/>
        :
        <View>
          <FlatList
            data={userTrip}
            renderItem={({item}) => {
              return (<View style={{marginBottom: 5}}>
                <Text
                  style={{fontFamily: 'outfit', fontSize: 20, color: Colors.GRAY}}
                >Fligt {item?.tripData?.flight?.details}</Text>
                <Text
                  style={{color: Colors.PRIMARY, fontFamily: 'outfit-bold'}}
                >Budget {item?.tripData?.flight?.price}</Text>
                <TouchableOpacity
                  onPress={() => onPressItem(item)}
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
                  }}>See your plan</Text>
                </TouchableOpacity>
              </View>)
            }}
          />
        </View>
      }
    </View>
  )
}

export default MyTrip

const styles = StyleSheet.create({})