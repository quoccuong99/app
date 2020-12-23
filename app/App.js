import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screen
import Wellcom from './component/wellcom';
import Login from './component/login';
import Home from './component/home'
import ClassInfomation from './component/menu/classInformation'
import Evaluate from './component/menu/evaluate'
// import Notification from './component/menu/notification'
import StudentCorner from './component/menu/studentCorner'
import Study from './component/menu/study'
import System from './component/menu/system'
import Document from './component/children/document';
import Practise from './component/children/practise';
import TestSchedule from './component/children/testSchedule';
import Tuition from './component/children/tuition';
import Notification from './component/children/notification';


// 
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TabBarIOS, } from 'react-native';
import Timetable from './component/children/timetable';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();



export default class App extends React.Component {
  createHomeTabs = () =>
  // <Tabs.Navigator screenOptions={{headerShown:false}}>
  <Tabs.Navigator>
    <Tabs.Screen name='Home' component={Home} />
    <Tabs.Screen name='System' component={System} />
  </Tabs.Navigator> 

  createHomeStack = () =>
    <Stack.Navigator screenOptions={{ keyboardHandlingEnabled: false }}>

      <Stack.Screen name='hello' component={Wellcom} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="login" component={Login} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="home" component={this.createHomeTabs} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='notification' component={Notification} options={{ title: 'thông báo'}}/>
      <Stack.Screen name='timetable' component={Timetable} options={{ title: 'Weekly planner'}}/>
      <Stack.Screen name='document' component={Document} options={{ title: 'tài liệu học tập'}}/>
      <Stack.Screen name='practise' component={Practise} options={{ title: 'rèn luyện'}}/>
      <Stack.Screen name='testSchedule' component={TestSchedule} options={{ title: 'lịch thi'}}/>
      <Stack.Screen name='tuition' component={Tuition} options={{ title: 'học phí'} }/>

    </Stack.Navigator>



  render() {
    return (

      <NavigationContainer>
        {this.createHomeStack()}
      </NavigationContainer>
    );
  }
}

