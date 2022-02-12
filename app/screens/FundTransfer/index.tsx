import { FunctionComponent, useEffect, useState } from 'react'
import * as yup from 'yup';
import { Alert, SafeAreaView, TextInput, TouchableOpacity, View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
import globalStyles from '../../globals/styles'
import styles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { currencyFormat } from '../../helpers';
import { initiateTransfer } from '../../redux/Bank/BankAction';
import Button from '../../components/Button';
import actionType from '../../redux/Bank/BankActionType';

interface FundTransferProps {
  navigation: any
}

const FundTransferScreen: FunctionComponent<FundTransferProps> = ({ navigation }) => {
    const dispatch = useDispatch()
  const selectedBank: any = useSelector<RootState>((reducer) => reducer.bankList.selected)
  const {loading}: boolean = useSelector<RootState>((reducer) => reducer.transactions)

  const [amountValue, setAmountValue] = useState<string>()
  const [accountNum, setAccountNum] = useState<string>()
  const [description, setDescription] = useState<string>()

  const [amountValueText, setAmountValueText] = useState<any>('')

  function formatCurrency(num: number) {
      if(!Number.isNaN(num)){
        const formatted = currencyFormat(num)
         setAmountValueText(formatted)
      }

 }
 
 let schema = yup.object().shape({
    Amount: yup.number().required().min(100).max(10000000),
    'Account Number': yup.string().required(),
  });


  const handleSubmit = () => {
    schema.validate({ Amount: amountValue, 'Account Number': accountNum})
    .then(function () {
       dispatch(initiateTransfer({
        type: 'nuban',
        account_number: accountNum,
        bank_code: selectedBank.code,
        currency: "NGN"
      }, navigation, { amount: amountValue, reason: description }))
    }).catch(function (err) {
        Alert.alert(err.errors[0])
      });
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {

      dispatch({type: actionType.CLEAR_SELECTED});
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={[globalStyles.layout]}>
         <KeyboardAvoidingView
      behavior='position'
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[globalStyles.container]}>
       
        <View>
          <Text style={styles.label}>Amount</Text>
          <TextInput keyboardType="decimal-pad" onChangeText={(text) => {
               setAmountValueText(text)
              setAmountValue(text)
        }} value={amountValueText} onBlur={() => formatCurrency(Number(amountValueText))}  onFocus={() => setAmountValueText(amountValue)} style={styles.textInput} />
        </View>
        <View>
          <Text style={styles.label}>Select Bank</Text>
          <TouchableOpacity style={styles.textInput} onPress={() => navigation.navigate('SelectBankModal')}>
            <Text style={styles.selectedBank}>{selectedBank?.name}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Account Number</Text>
          <TextInput value={accountNum} keyboardType='number-pad' onChangeText={(text) => setAccountNum(text)} style={styles.textInput} />
        </View>

        <View>
          <Text style={styles.label}>Description</Text>
          <TextInput value={description} maxLength={50}  onChangeText={(text) => setDescription(text)} style={styles.textInput} />
        </View>
<View style={{marginTop: 15}}>
<Button loading={loading} disabled={!amountValue || !accountNum || !selectedBank} onPress={handleSubmit} label='Next'/>

</View>

      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default FundTransferScreen
