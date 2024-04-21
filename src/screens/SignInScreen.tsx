/* eslint-disable react-native/no-inline-styles */
// SignInScreen.tsx

import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
type SignInScreenProps = {
  navigation: NavigationProp<any>;
};
const SignInScreen: React.FC<SignInScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const checkDate = () => {
    if (!email.includes('@') || email.length === 0 || password.length < 8)
      console.log('invalid information');
    return navigation.navigate('Home');
  };
  // const [icon, setIcon] = useState(true);
  // const clickEye = () => {
  //   icon ? setIcon(false) : setIcon(true);
  // };
  // let imageSource = icon ? PassIconInV : PassIconV;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '30%', width: '96%', marginBottom: '12%'}}>
          <ImageBackground
            source={require('../assets/signin/headericon.png')}
            style={styles.logo}>
            <View style={{marginTop: '24%', marginLeft: '5%'}}>
              <Text style={styles.title}>Sign in to your </Text>
              <Text style={styles.title}>account</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.emailView}>
          <Text style={styles.inpText}>E-mail</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderWidth: 2,
              borderRadius: 10,
              borderColor: '#E1E8EB',
            }}>
            <Image
              source={require('../assets/signin/mail.png')}
              style={{marginTop: '3.5%'}}
            />
            <TextInput
              style={styles.input}
              onChangeText={val => setEmail(val)}
              placeholder="Enter your email"
              textContentType="emailAddress"
            />
          </View>
        </View>
        <View style={styles.passView}>
          <Text style={styles.inpText}>Password</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderWidth: 2,
              borderRadius: 10,
              borderColor: '#E1E8EB',
            }}>
            <Image
              source={require('../assets/signin/lock.png')}
              style={{marginTop: '3.5%'}}
            />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter your password"
              textContentType="newPassword"
              secureTextEntry
              onChangeText={val => setPassword(val)}
            />
          </View>
        </View>
        <View style={styles.forgotwordview}>
          <TouchableOpacity
          // onPress={() => {
          //   navigation.navigate('ForgetPass');
          // }}>
          >
            <Text style={styles.forgotword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={checkDate}>
          <View style={styles.buttonview}>
            <View style={styles.button2}>
              <Text style={styles.button1}> Sign in</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{color: '#ACACAC'}}>___________________</Text>
          <Text
            style={{
              marginLeft: '5%',
              marginRight: '5%',
              fontSize: 14,
              color: 'black',
            }}>
            OR
          </Text>
          <Text style={{color: '#ACACAC'}}>_____________________</Text>
        </View>
        <View style={styles.SinginWithGoogleView}>
          <TouchableOpacity style={{marginRight: '5%'}}>
            <Image source={require('../assets/signin/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: '5%'}}>
            <Image source={require('../assets/signin/facebookicon.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/signin/xicon.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.uptextView}>
          <Text style={styles.accountcreate}>
            Don't have an account?
            {/* here the navigation  */}
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.uptext}>Sign up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  logoView: {
    alignItems: 'flex-start',
  },
  logo: {
    width: '100%',
    height: '105%',
    // backgroundColor: 'red',
    borderRadius: 10,
  },
  titleView: {
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 32,
  },
  word: {
    color: '#0B3B63',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: 16,
  },
  emailView: {
    marginTop: 0,
  },
  inpText: {
    color: '#0B3B63A6',
    marginBottom: 5,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    opacity: 0.65,
  },
  input: {
    backgroundColor: '#ffff',
    borderColor: '#E1E8EB',
    // borderWidth: 1,
    width: 328,
    height: 48,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#0B3B63',
  },
  passView: {
    marginTop: 30,
  },
  inpViewPass: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    borderColor: '#FFA8C5',
    borderWidth: 1,
    width: 328,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
  },
  inputPass: {
    backgroundColor: '#ffff',
    borderColor: '#E1E8EB',
    width: 300,
    height: 44,
    paddingHorizontal: 10,
    color: '#0B3B63',
  },
  forgotword: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
    color: '#181D26',
    textDecorationLine: 'underline',
  },
  forgotwordview: {
    marginLeft: 216,
    marginTop: 10,
  },
  buttonview: {
    marginTop: '7%',
    marginBottom: '4%',
    borderRadius: 5,
    width: 328,
    height: 48,
    backgroundColor: '#5B4DBC',
    color: '#ffff',
  },
  button: {
    borderRadius: 5,
    width: 328,
    height: 48,
    backgroundColor: '#FFA8C5',
    color: '#ffff',
  },
  button1: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 22,
    color: '#ffff',
  },
  button2: {
    alignItems: 'center',
    marginTop: '1%',
  },
  orimage: {
    width: 300,
    height: 45,
  },
  orimageview: {
    marginTop: 30,
  },
  touch: {
    borderColor: '#ACACAC',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2,
    borderRadius: 5,
  },
  GoogleIcon: {
    width: 60,
    height: '40%',
  },
  lineicone: {
    width: '30%',
    height: 3,
  },
  GoogleText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Montserrat',
    color: '#0B3B63',
    textAlign: 'center',
  },
  SinginWithGoogleView: {
    marginTop: '4%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountcreate: {
    color: '#0B3B63',
    opacity: 0.65,
    marginBottom: 50,
  },
  uptext: {
    textDecorationLine: 'underline',
    // color: '#FFA8C5',
    fontSize: 15,
  },
  uptextView: {
    marginTop: 30,
    marginRight: 130,
    marginBottom: 72,
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#0B3B63',
    width: 328,
    height: 48,
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#0B3B63',
  },
});
export default SignInScreen;
