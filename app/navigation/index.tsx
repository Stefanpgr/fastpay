import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Platform, View } from 'react-native'

import { appTheme } from '../config'
import FundTransferScreen from '../screens/FundTransfer'
import ConfirmTransferScreen from '../screens/ConfirmTransfer'

import SelectBankModal from '../screens/FundTransfer/SelectBankModal'
import HomeScreen from '../screens/Home'
import TransfersScreen from '../screens/Tansfers'
import TransferDetailsScreen from '../screens/TransferDetails'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator()

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Group
        screenOptions={{
          headerTintColor: Platform.OS === 'ios' ? appTheme.white : appTheme.black,
          headerTransparent: true,
          headerBackground: () => <View style={{ backgroundColor: appTheme.primaryColor, height: '100%' }}></View>,
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Welcome', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="FundTransferScreen"
          component={FundTransferScreen}
          options={{ title: 'Transfer', headerBackTitle: 'Back' }}
        />

        <Stack.Screen
          name="ConfirmTransferScreen"
          component={ConfirmTransferScreen}
          options={{ title: 'Confirm Transfer', headerBackTitle: 'Back' }}
        />
        <Stack.Screen
          name="Transfers"
          component={TransfersScreen}
          options={{ title: 'Recent Transfers', headerBackTitle: 'Back' }}
        />
         <Stack.Screen
          name="TransferDetailsScreen"
          component={TransferDetailsScreen}
          options={{ title: 'Transfer Details', headerBackTitle: 'Back' }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
        <Stack.Screen name="SelectBankModal" component={SelectBankModal} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
