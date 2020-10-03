
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from './app/screens/SpashScreen'
import MainScreen from './app/screens/MainScreen'
import EmergencyAlertScreen from './app/screens/EmergencyAlertScreen'
import HotlineScreen from './app/screens/HotlineScreen'
import SitesScreen from './app/screens/SitesScreen'
import DisasterScreen from './app/screens/DisasterScreen'
  import EarthquakeScreen from './app/screens/GDPScreens/EarthquakeScreen'
  import ForestFireScreen from './app/screens/GDPScreens/ForestFireScreen'
  import FloodScreen from './app/screens/GDPScreens/FloodScreen'
  import LandslideScreen from './app/screens/GDPScreens/LandslideScreen'
  import VolcanoScreen from './app/screens/GDPScreens/VolcanoScreen'
  import FireScreen from './app/screens/GDPScreens/FireScreen'
import FirstAidScreen from './app/screens/FirstAidScreen'
  import MentalScreen from "./app/screens/FirstAidScreens/MentalScreen";
  import CPRScreen from "./app/screens/FirstAidScreens/CPRScreen";
  import ShockScreen from "./app/screens/FirstAidScreens/ShockScreen";
  import FaintScreen from "./app/screens/FirstAidScreens/FaintScreen";
  import ChokingScreen from "./app/screens/FirstAidScreens/ChokingScreen";
  import DrowningScreen from "./app/screens/FirstAidScreens/DrowningScreen";
  import BurnScreen from "./app/screens/FirstAidScreens/BurnScreen";
  import NosebleedScreen from "./app/screens/FirstAidScreens/NosebleedScreen";
  import SnakeBiteScreen from "./app/screens/FirstAidScreens/SnakeBiteScreen";
  import JellyfishStingScreen from "./app/screens/FirstAidScreens/JellyfishStingScreen";
  import BeeStingScreen from "./app/screens/FirstAidScreens/BeeStingScreen";
  import AsthmaScreen from "./app/screens/FirstAidScreens/AsthmaScreen";
  import AnimalBiteScreen from "./app/screens/FirstAidScreens/AnimalBiteScreen";
import AboutUs from './app/screens/AboutUs'



export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode = "none"> 
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="EmergencyAlertScreen" component={EmergencyAlertScreen}/>
        <Stack.Screen name="HotlineScreen" component={HotlineScreen}/>
        <Stack.Screen name="SitesScreen" component={SitesScreen}/>
        <Stack.Screen name="DisasterScreen" component={DisasterScreen}/>
          <Stack.Screen name="EarthquakeScreen" component={EarthquakeScreen}/>
          <Stack.Screen name="ForestFireScreen" component={ForestFireScreen} />
          <Stack.Screen name="FloodScreen" component={FloodScreen} />
          <Stack.Screen name="LandslideScreen" component={LandslideScreen} />
          <Stack.Screen name="VolcanoScreen" component={VolcanoScreen} />
          <Stack.Screen name="FireScreen" component={FireScreen} />
        <Stack.Screen name="FirstAidScreen" component={FirstAidScreen}/>
          <Stack.Screen name="MentalScreen" component={MentalScreen} />
          <Stack.Screen name="CPRScreen" component={CPRScreen} />
          <Stack.Screen name="ShockScreen" component={ShockScreen} />
          <Stack.Screen name="FaintScreen" component={FaintScreen} />
          <Stack.Screen name="ChokingScreen" component={ChokingScreen} />
          <Stack.Screen name="DrowningScreen" component={DrowningScreen} />
          <Stack.Screen name="BurnScreen" component={BurnScreen} />
          <Stack.Screen name="NosebleedScreen" component={NosebleedScreen} />
          <Stack.Screen name="SnakeBiteScreen" component={SnakeBiteScreen} />
          <Stack.Screen name="JellyfishStingScreen" component={JellyfishStingScreen} />
          <Stack.Screen name="BeeStingScreen" component={BeeStingScreen} />
          <Stack.Screen name="AsthmaScreen" component={AsthmaScreen} />
          <Stack.Screen name="AnimalBiteScreen" component={AnimalBiteScreen} />
        <Stack.Screen name="AboutUs" component={AboutUs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


