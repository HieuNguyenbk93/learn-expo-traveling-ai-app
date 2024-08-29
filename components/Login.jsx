import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { imageLogin } from '@/assets/images'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router';

export default function Login() {

  const router = useRouter();

  return (
    <View>
      <Image source={imageLogin}
        style={{
          width: '100%',
          height:400
        }}
      />
      <View style={styles.container}>
        <Text style={{fontSize:28, fontFamily:'outfit-bold', textAlign: 'center',
          marginTop: 20
        }}>AI Travel Planner</Text>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 16,
          color: Colors.GRAY,
          textAlign: 'center',
          marginTop: 20
        }}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        <TouchableOpacity style={styles.button}
          onPress={() => router.push('auth/sign-in')}
        >
          <Text style={{color: Colors.WHITE, textAlign: 'center', fontFamily: 'outfit', fontSize: 16}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '100%',
    padding: 15
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '20%'
  }
})