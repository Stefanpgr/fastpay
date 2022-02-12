/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { FontAwesome } from '@expo/vector-icons';
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import { ColorSchemeName, Platform, Pressable, View } from 'react-native';
 

 import { RootStackParamList } from '../../types';
import { appTheme } from '../config';
import FundTransferScreen from '../screens/FundTransfer';
import ConfirmTransferScreen from '../screens/ConfirmTransfer';

import SelectBankModal from '../screens/FundTransfer/SelectBankModal';
import HomeScreen from '../screens/Home';
//  import LinkingConfiguration from './LinkingConfiguration';
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator initialRouteName='HomeScreen' >
        <Stack.Group screenOptions={{headerTintColor: Platform.OS === 'ios' ? appTheme.white : appTheme.black, headerTransparent: true, headerBackground: () => <View style={{backgroundColor: appTheme.primaryColor, height: '100%'}}></View> }}>
       <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Welcome',  headerBackTitle: 'back' }} />
       <Stack.Screen name="FundTransferScreen" component={FundTransferScreen} options={{ title: 'Transfer', headerBackTitle: 'Back' }} />

       <Stack.Screen name="ConfirmTransferScreen" component={ConfirmTransferScreen} options={{ title: 'Confirm Transfer', headerBackTitle: 'Back' }} />
       </Stack.Group>
       <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false, }}>
         <Stack.Screen name="SelectBankModal" component={SelectBankModal} />
       </Stack.Group>
     </Stack.Navigator>
   );
 }
 