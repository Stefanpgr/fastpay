import { Alert } from 'react-native'
import { currencyFormat } from '../../helpers'
import actionType from './BankActionType'
import { finalizeTransferApi, getBankList, getTransfers, initiateTransferApi } from './BankService'

export const fetchBanks = () => async (dispatch) => {
  try {
    const response = await getBankList()
    dispatch({ type: actionType.FETCH_BANKS, payload: response.data.data })
  } catch (error) {}
}

export const initiateTransfer = (payload, navigation, formValues) => async (dispatch) => {
  try {
    dispatch({ type: actionType.LOADING, payload: true })
    const res = await initiateTransferApi(payload)
    dispatch({ type: actionType.LOADING, payload: false })
    const transferData = { ...res.data.data.details, recipient_code: res.data.data.recipient_code, ...formValues }
    navigation.navigate('ConfirmTransferScreen', { transferData })
  } catch (error) {
    dispatch({ type: actionType.LOADING, payload: false })
    Alert.alert(error?.response.data.message)
  }
}

export const finalizeTransfer = (payload, navigation) => async (dispatch) => {
  try {
    dispatch({ type: actionType.LOADING, payload: true })
    const res = await finalizeTransferApi(payload)
    dispatch({ type: actionType.LOADING, payload: false })
    return Alert.alert('Success', `Transfer of Amount: ${currencyFormat(payload.amount / 100)} is being processed.`, [
      {
        text: 'Home',
        onPress: () => {
          return navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
          })
        },
      },
    ])
  } catch (error) {
    dispatch({ type: actionType.LOADING, payload: false })
    return Alert.alert(error?.response.data.message)
  }
}

export const FetchTransfers = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.LOADING, payload: true })
    const res = await getTransfers()
    dispatch({
      type: actionType.FETCH_TRANSFERS,
      payload: res.data.data
    })
  } catch (error) {
      console.log(error)
    dispatch({ type: actionType.LOADING, payload: false })
    Alert.alert(error?.response?.data?.message)
  }
}
