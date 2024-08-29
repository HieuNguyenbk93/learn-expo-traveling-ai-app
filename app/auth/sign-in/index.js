import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from '../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const SignIn = () => {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View style={{padding: 25, marginTop: 60, backgroundColor: Colors.WHITE, height: '100%'}}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{fontFamily: 'outfit-bold', fontSize: 30, marginTop: 20}}>Let's Sign You In</Text>
      <Text style={{fontFamily: 'outfit', fontSize: 30, color: Colors.GRAY, marginTop: 20
      }}>Welcome Back</Text>
      <Text style={{fontFamily: 'outfit', fontSize: 30, color: Colors.GRAY, marginTop: 20
      }}>You've been missed</Text>

      <View style={{marginTop: 50}}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Email</Text>
        <TextInput style={styles.input} placeholder='Enter Email'/>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Password'/>
      </View>

      <TouchableOpacity style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: 50
      }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center',
        }}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-up')}
        style={{
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 20,
        borderWidth: 1
      }}>
        <Text style={{
          color: Colors.PRIMARY,
          textAlign: 'center',
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit'
  }
})