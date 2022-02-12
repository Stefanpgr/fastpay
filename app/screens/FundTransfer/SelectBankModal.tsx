import React, { FunctionComponent, useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { appTheme, fontsize } from '../../config'
import globalStyles from '../../globals/styles'
import { RootState } from '../../redux'
import { fetchBanks } from '../../redux/Bank/BankAction'
import actionType from '../../redux/Bank/BankActionType'

interface FundTransferProps {
  navigation: any
}

const SelectBankModal: FunctionComponent<FundTransferProps> = ({ navigation }) => {
  const { banks }: any = useSelector<RootState>((reducer) => reducer.bankList)
  const [bankList, setBankList] = useState(banks)
  const dispatch = useDispatch()

  const searchBankName = (text: string) => {
    const textString = text.toLowerCase().trim();
    const result = banks.filter((item: any) => {
        return item.name.toLowerCase().includes(textString)
    })
    setBankList(result)
  }

  useEffect(() => {
    dispatch(fetchBanks())
  }, [])

  const handleSelectBank = (payload: any) => {
    dispatch({ type: actionType.SELECT_BANK, payload })
    return navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.modalView}>
      <View style={[styles.topFlex]}>
        <View style={styles.headWrp}>
          <View />

          <Pressable style={{ marginTop: 5 }} onPress={() => navigation.goBack()}>
            <Text onPress={() => navigation.goBack()}>x</Text>
            {/* <XIcon /> */}
          </Pressable>
        </View>

        <View style={{ marginTop: 35 }}>
          <Text style={[styles.searchTitle]}>Select Bank</Text>
          <View style={styles.searchIcon}>
            {/* <SearchIcon /> */}

            <TextInput
              style={styles.searchTxt}
              onChangeText={(text) => searchBankName(text)}
              placeholder="Search Bank name"
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 2.5, backgroundColor: '#fff' }}>
  
        <FlatList
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={bankList || banks} 
            renderItem={({item}) => (
                <View>
                <TouchableOpacity
             
                  activeOpacity={0.8}
                  onPress={() => handleSelectBank(item)}
                  style={styles.listCont}
                >
                  <View style={styles.flexRow}>
                 
                    <Text style={[styles.listName]}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 2, borderBottomColor: '#F8F8F8' }} />
              </View>
            )}
            ListEmptyComponent={() => <>{!bankList && <ActivityIndicator size='large' />}</>}
            />
      </View>
    </SafeAreaView>
    // </Modal>
  )
}

const paddingHorizontal = 10

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  topFlex: { flex: 1, backgroundColor: appTheme.grey, paddingHorizontal },
  modalContent: {
    marginTop: 18,
    paddingHorizontal: 20,
  },
  searchTitle: {
    // fontFamily: mediumFont,
    fontSize: fontsize.HEADER3,
    textAlign: 'center',
    marginBottom: 25,
    // fontFamily: FONTFAMILYMEDIUM,
  },
  headWrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchTxt: {
    backgroundColor: '#fff',
    height: 50,
    fontSize: fontsize.HEADER4,
    paddingHorizontal: 15,
    width: '90%',
  },
  searchIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
  },
  listCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listName: {
    marginLeft: 6,
    textTransform: 'uppercase',
    fontSize: fontsize.HEADER4,
    color: '#4b4b4b',
  },
})

export default SelectBankModal
