import React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OrphanegMap from './pages/OrphanageMaps';
import OrphanageDetails from './pages/OrphanageDetails';

import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';

const {Navigator, Screen} = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="OrphanageMap" component={OrphanegMap} />
        <Screen name="OrphanageDetails" component={OrphanageDetails} />

        <Screen name="OrphanageData" component={OrphanageData} />
        <Screen name="SelectMapPosition" component={SelectMapPosition} />
      </Navigator>
    </NavigationContainer>
  )
}