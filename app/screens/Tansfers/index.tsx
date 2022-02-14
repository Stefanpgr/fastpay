import { FunctionComponent, useEffect } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import RencentTransferCard from '../../components/RecentTransferCard'
import { appTheme } from '../../config'
import globalStyles from '../../globals/styles'
import { RootState } from '../../redux'
import { FetchTransfers } from '../../redux/Bank/BankAction'
import styles from './style'

interface TransfersProps {
  navigation: any
}

const TransfersScreen: FunctionComponent<TransfersProps> = ({ navigation }) => {
  const dispatch = useDispatch()
  const { transferData, loading }: any[] = useSelector<RootState>((state) => state.transfers)
  useEffect(() => {
    dispatch(FetchTransfers())
  }, [])

  const handleNavigation = ({ amount, reference, recipient, status, createdAt, reason }: any) => {
    return navigation.navigate('TransferDetailsScreen', {
      payload: {
        amount,
        reference,
        account_details: { ...recipient.details },
        status,
        createdAt,
        reason
      },
    })
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      {loading ? (
        <ActivityIndicator  size='large' color={appTheme.primaryColor}/>
      ) : (
        <FlatList
        showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
          data={transferData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleNavigation(item)} style={{ marginBottom: 15 }} activeOpacity={0.8}>
              <RencentTransferCard item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item?.id}
          ListEmptyComponent={() => <Text style={{ textAlign: 'center' }}>No recent transfers found</Text>}
        />
      )}
    </SafeAreaView>
  )
}

export default TransfersScreen
