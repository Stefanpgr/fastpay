import { FunctionComponent } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import globalStyles from '../../globals/styles'
import { currencyFormat } from '../../helpers'
import { RootState } from '../../redux'
import { finalizeTransfer } from '../../redux/Bank/BankAction'
import styles from './style'

interface TransferdataProps {
  authorization_code: string
  account_number: string
  account_name: string
  bank_code: string
  bank_name: string
  recipient_code: string
  amount: string
  reason: string
}
interface ConfirmTransferScreenProps {
  navigation: any
  route: any
}

const ConfirmTransferScreen: FunctionComponent<ConfirmTransferScreenProps> = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const { loading }: boolean = useSelector<RootState>((reducer) => reducer.transfers)

  const transferData: TransferdataProps = route.params.transferData
  const handleConfirm = () => {
    dispatch(
      finalizeTransfer(
        {
          source: 'balance',
          reason: transferData.reason,
          amount: Number(transferData.amount) * 100,
          recipient: transferData.recipient_code,
        },
        navigation
      )
    )
  }
  return (
    <SafeAreaView style={globalStyles.layout}>
      <ScrollView contentContainerStyle={globalStyles.container}>
          <View style={{alignItems:'center', marginBottom: 30}}>
          <Text style={styles.breakDownTxt}>Transferring to: </Text>
        <Text style={[styles.breakDownTxt, {fontWeight: 'bold', marginVertical: 5}]}>{transferData.account_name}</Text>
        <Text style={styles.breakDownTxt}>Amount:</Text>
        <Text style={[styles.breakDownTxt, {fontWeight: 'bold', marginVertical: 5}]}>{currencyFormat(Number(transferData.amount))}</Text>
          </View>
      
        <View style={styles.breakDownCont}>
          <Text style={styles.breakDownTxt} >Description: </Text>
          <Text style={[styles.breakDownTxt, {width: 150}]} numberOfLines={1}>{transferData.reason}</Text>
        </View>
        <View style={styles.breakDownCont}>
          <Text style={styles.breakDownTxt}>Beneficiary Bank:</Text>
          <Text style={styles.breakDownTxt}>{transferData.bank_name}</Text>
        </View>
        <View style={styles.breakDownCont}>
          <Text style={styles.breakDownTxt}>Beneficiary Account:</Text>
          <Text style={styles.breakDownTxt}>{transferData.account_number}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonWrp}>
        <Button loading={loading} onPress={handleConfirm} label="Confirm" />
      </View>
    </SafeAreaView>
  )
}

export default ConfirmTransferScreen
