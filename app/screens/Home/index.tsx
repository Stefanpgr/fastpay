import React, { FunctionComponent } from 'react'
import { Text, SafeAreaView, ScrollView, View } from 'react-native'
import Button from '../../components/Button'
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
        <HomeSelectCard onPress={() => navigation.navigate('FundTransferScreen')} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
