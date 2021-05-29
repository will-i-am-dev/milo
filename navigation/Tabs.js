import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CallScreen from '../screens/CallScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false, style: {height: 60}}}>
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.ButtonContainer}>
              <SimpleLineIcons
                name={'home'}
                size={25}
                color={focused ? '#74ceb6' : '#3b3b3f'}
              />
              <Text
                style={{color: focused ? '#74ceb6' : '#3b3b3f', fontSize: 12}}>
                Inicio
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Amigos"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.ButtonContainer}>
              <Ionicons
                name={'chatbox-outline'}
                size={25}
                color={focused ? '#74ceb6' : '#3b3b3f'}
              />
              <Text
                style={{color: focused ? '#74ceb6' : '#3b3b3f', fontSize: 12}}>
                Amigos
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lamar"
        component={CallScreen}
        options={{
          tabBarButton: props => <CustomTabarBarButton {...props} />,
          tabBarIcon: ({focused}) => (
            <View style={styles.BtnCall}>
              <Feather
                name={'phone-call'}
                size={35}
                color={focused ? '#74ceb6' : '#fff'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Filtro"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.ButtonContainer}>
              <AntDesign
                name={'filter'}
                size={25}
                color={focused ? '#74ceb6' : '#3b3b3f'}
              />
              <Text
                style={{color: focused ? '#74ceb6' : '#3b3b3f', fontSize: 12}}>
                Filtro
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Yo"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.ButtonContainer}>
              <SimpleLineIcons
                name={'user'}
                size={25}
                color={focused ? '#74ceb6' : '#3b3b3f'}
              />
              <Text
                style={{color: focused ? '#74ceb6' : '#3b3b3f', fontSize: 12}}>
                Yo
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const CustomTabarBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{top: -15, justifyContent: 'center', alignItems: 'center'}}
    onPress={onPress}>
    <View
      style={{
        width: 65,
        height: 65,
        borderRadius: 35,
        backgroundColor: '#3b3b3f',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  BtnCall: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingRight: 4,
  },
});

export default Tabs;
