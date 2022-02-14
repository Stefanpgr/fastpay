import { FunctionComponent } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { appTheme } from '../../config'
import globalStyles from '../../globals/styles'
import { currencyFormat, formatDate } from '../../helpers'
import styles from './style'

interface AccountDetails {
  account_number: string
  account_name: string
  bank_name: string
}

interface TransferDetailsDataProps {
  reference: string
  createdAt: string
  account_details: AccountDetails
  amount: string
  reason: string
  status: string
}
interface TransferDetailsScreenScreenProps {
  navigation: any
  route: any
}

const TransferDetailsScreen: FunctionComponent<TransferDetailsScreenScreenProps> = ({ route }) => {
  const transferData: TransferDetailsDataProps = route.params.payload

  return (
    <SafeAreaView style={globalStyles.layout}>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
 
          <Text style={styles.breakDownTxt}>Status:</Text>
          <Text style={[styles.breakDownTxt, { fontWeight: 'bold', marginVertical: 5, color: appTheme.primaryColor }]}>
            {transferData.status}
          </Text>
        </View>
             <View style={styles.breakDownCont}>
          <Text style={styles.breakDownTxtTitle}>Date:</Text>
          <Text style={styles.breakDownTxt}>{formatDate(transferData.createdAt, 'en-uk')}</Text>
        </View>
        <View style={styles.breakDownCont}>
          <Text style={styles.breakDownTxtTitle}>Amount: </Text>
          <Text style={[styles.breakDownTxt, { width: 150 }]} numberOfLines={1}>
          {currencyFormat(Number(transferData.amount))}
          </Text>
        </View>
        <View style={styles.breakDownCont}>
          <Text style={styles.breakDownTxtTitle}>Reference Number: </Text>
          <Text style={[styles.breakDownTxt, { width: 150 }]} numberOfLines={1}>
            {transferData.reference}
          </Text>
        </View>
        <View style={styles.breakDownCont}>
          <Text style={styles.breakDownTxtTitle}>Description: </Text>
          <Text style={[styles.breakDownTxt, { width: 150 }]} numberOfLines={1}>
            {transferData.reason}
          </Text>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: appTheme.grey, marginVertical: 10 }} />

        <View style={styles.breakDownCont}>
          <Text style={styles.breakDownTxtTitle}>Account name:</Text>
          <Text style={styles.breakDownTxt}>{transferData.account_details.account_name}</Text>
        </View>
        <View style={styles.breakDownCont}>
          <Text style={styles.breakDownTxtTitle}>Bank:</Text>
          <Text style={styles.breakDownTxt}>{transferData.account_details.bank_name}</Text>
        </View>
        <View style={styles.breakDownCont}>
          <Text style={styles.breakDownTxtTitle}>Account Number:</Text>
          <Text style={styles.breakDownTxt}>{transferData?.account_details.account_number}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TransferDetailsScreen
