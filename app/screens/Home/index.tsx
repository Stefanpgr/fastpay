import React, { FunctionComponent } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import HomeSelectCard from '../../components/HomeSelectCard'
import globalStyles from '../../globals/styles'
import styles from './style'

interface HomeProps {
  navigation: any
}

const Home: FunctionComponent<HomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.layout]}>
      <ScrollView contentContainerStyle={[globalStyles.container]}>
          <View>
          <HomeSelectCard title='Transfer Funds' iconName='bank-transfer' onPress={() => navigation.navigate('FundTransferScreen')} />

          </View>
          <View style={{marginTop: 24}}>
        <HomeSelectCard title='Recent Transfers' iconName='history' iconColor='#020433' onPress={() => navigation.navigate('Transfers')} />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
