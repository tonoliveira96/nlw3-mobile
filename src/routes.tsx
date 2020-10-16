import React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OrphanegMap from './pages/OrphanageMaps';
import OrphanageDetails from './pages/OrphanagesDetails';

const {Navigator, Screen} = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="OrphanageMap" component={OrphanegMap} />
        <Screen name="OrphanageDetails" component={OrphanageDetails} />
      </Navigator>
    </NavigationContainer>
  )
}