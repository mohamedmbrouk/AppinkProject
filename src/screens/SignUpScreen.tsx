/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState, useRef} from 'react';
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
type SignUpScreen = {
  navigation: NavigationProp<any>;
};
const SignUpScreen: React.FC<SignUpScreen> = ({navigation}) => {
  const [username, setusername] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);
  const input4Ref = useRef<TextInput>(null);
  function alert(_arg0: string) {
    return _arg0;
  }
  const checkDate = () => {
    if (
      email.length === 0 &&
      password.length === 0 &&
      username.length === 0 &&
      confirmpassword.length === 0
    ) {
      alert('invalid information');
    } else if (email.length === 0) {
      alert('Please enter your email');
    } else if (!email.includes('@')) {
      alert('invalid email');
    } else if (password.length < 8) {
      alert('Password must be at least 8 characters');
    } else if (username.length === 0) {
      alert('Please enter your name');
    } else if (confirmpassword.length === 0) {
      alert('Please enter your confirmpassword');
    }
    return navigation.navigate('Home');
  };
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={{height: '30%', width: '96%', marginBottom: '5%'}}>
          <ImageBackground
            source={require('../assets/signin/headericon.png')}
            style={styles.logo}>
            <TouchableOpacity
              style={{marginTop: '3%', marginLeft: '2%'}}
              onPress={() => navigation.navigate('SignIn')}>
              <Image source={require('../assets/signin/back.png')} />
            </TouchableOpacity>
            <View style={{marginTop: '5%', marginLeft: '5%'}}>
              <Text style={styles.title}>Sign up to your </Text>
              <Text style={styles.title}>account</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.emailView}>
          <Text style={styles.inpText}>User name</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderWidth: 2,
              borderRadius: 10,
              borderColor: '#E1E8EB',
            }}>
            <TextInput
              style={styles.input}
              onChangeText={val => setusername(val)}
              placeholder="Enter your name"
              textContentType="name"
              ref={input1Ref}
              onSubmitEditing={() => input1Ref.current?.focus()}
            />
          </View>
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
            <TextInput
              style={styles.input}
              onChangeText={val => setEmail(val)}
              placeholder="Enter your email"
              textContentType="emailAddress"
              ref={input2Ref}
              onSubmitEditing={() => input3Ref.current?.focus()}
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
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter your password"
              textContentType="newPassword"
              secureTextEntry={!showPassword}
              onChangeText={val => setPassword(val)}
              ref={input3Ref}
              onSubmitEditing={() => input4Ref.current?.focus()}
            />
            <TouchableOpacity
              style={{marginTop: '3%', marginRight: '2%'}}
              onPress={togglePasswordVisibility}>
              <Image
                source={
                  showPassword
                    ? require('../assets/signin/eye.png')
                    : require('../assets/signin/iconoir_eye-close.png')
                }
                style={{marginTop: '3.5%'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.passView}>
          <Text style={styles.inpText}>Confirm Password</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderWidth: 2,
              borderRadius: 10,
              borderColor: '#E1E8EB',
            }}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter your password"
              textContentType="newPassword"
              secureTextEntry={!showPassword}
              onChangeText={val => setconfirmpassword(val)}
            />
            <TouchableOpacity
              style={{marginTop: '3%', marginRight: '2%'}}
              onPress={togglePasswordVisibility}>
              <Image
                source={
                  showPassword
                    ? require('../assets/signin/eye.png')
                    : require('../assets/signin/iconoir_eye-close.png')
                }
                style={{marginTop: '3.5%'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'baseline', marginTop: '10%'}}>
          <TouchableOpacity
            style={styles.checkboxButton}
            onPress={toggleCheckbox}>
            <View style={[styles.checkbox, isChecked && styles.checked]}>
              {isChecked && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.label}>
              I agree to the terms and conditions
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={checkDate} style={{marginBottom: '12%'}}>
          <View style={styles.buttonview}>
            <View style={styles.button2}>
              <Text style={styles.button1}> Sign Up</Text>
            </View>
          </View>
        </TouchableOpacity>
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
    height: '100%',
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
    marginTop: '3%',
    width: '89%',
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
    marginTop: '3%',
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
  checkboxButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#000',
  },
  checkmark: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
  },
});
export default SignUpScreen;
