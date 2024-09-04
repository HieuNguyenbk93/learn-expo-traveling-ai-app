import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Colors} from '../../constants/Colors'
import {loadingPlane} from '../../assets/images'
import { CreateTripContext } from '../../context/CreateTripContext'
import { AI_PROMPT } from '../../constants/Options'
import { chatSession } from '../../configs/AiModal'

export default function GenerateTrip() {

  const {tripData, setTripData} = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GenerateAiTrip();
  }, [])
  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', tripData.locationInfo.name)
      .replaceAll('{totalDay}', tripData.totalDays)
      .replaceAll('{totalNight}', tripData.totalDays - 1)
      .replace('{traveler}', tripData.traveler.title)
      .replace('{budget}', tripData.budget.name);
    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    setLoading(false)
  }
  return (
    <View>
      <View style={{
        padding: 25,
        paddingTop: 95,
        backgroundColor: Colors.WHITE,
        height: '100%'
      }}>
        <Text style={{
          fontSize: 30,
          fontFamily: 'outfit-bold',
          textAlign: 'center'
        }}>Please wait ...</Text>
        
        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit-medium',
          textAlign: 'center',
          marginTop: 40,
          marginBottom: 40
        }}>We are working to generate your dream trip</Text>
        {loading ? <ActivityIndicator size='large' color={Colors.PRIMARY} /> : <></>}
        
        {/* <Image source={loadingPlane}
          style={{ width: '100%', height: 300 }}
        /> */}

        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit',
          textAlign: 'center',
          marginTop: 40,
          color: Colors.GRAY
        }}>Do not Go Back</Text>
        {/* <View style={styles.container}>
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
        </View> */}

        {/* <TouchableOpacity
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
          }}>Build My Trip</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})