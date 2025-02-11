import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from '../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../configs/FirebaseConfig'
const SignUp = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  const onCreateAccount = () => {
    if (!email && !password && !fullName) {
      console.log('INVALID INPUT');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      router.replace('/mytrip');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    })
  }

  return (
    <View style={{padding: 25, marginTop: 60, backgroundColor: Colors.WHITE, height: '100%'}}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{fontFamily: 'outfit-bold', fontSize: 30, marginTop: 20}}>Create New Account</Text>

      <View style={{marginTop: 50}}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Full Name</Text>
        <TextInput style={styles.input} placeholder='Enter Full Name'
          onChangeText={setFullName}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Email</Text>
        <TextInput style={styles.input} placeholder='Enter Email'
          onChangeText={setEmail}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter Password'
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity 
        onPress={() => onCreateAccount()}
        style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: 50
      }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center',
        }}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-in')}
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
        }}>Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit'
  }
})