/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
type HomeScreen = {
  navigation: NavigationProp<any>;
};
const HomeScreen: React.FC<HomeScreen> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '20%',
            width: '96%',
            marginBottom: '10%',
            backgroundColor: '#D26060',
          }}>
          <TouchableOpacity
            style={{marginTop: '3%', marginLeft: '2%'}}
            onPress={() => navigation.navigate('SignIn')}>
            <Image source={require('../assets/signin/backblue.png')} />
          </TouchableOpacity>
          <Text style={styles.title}>App Weather </Text>
        </View>
        <View style={{paddingBottom: '20%'}}>
          <Image source={require('../assets/signin/weather.png')} />
          <Image source={require('../assets/signin/weather.png')} />
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
  title: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 32,
    marginTop: '3%',
    marginLeft: '15%',
    paddingBottom: '2%',
  },
});
export default HomeScreen;
