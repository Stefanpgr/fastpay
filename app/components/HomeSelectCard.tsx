import { FunctionComponent } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { appTheme, fontsize } from '../config'

interface HomeSelectCardProps {
    onPress: any;
}

const HomeSelectCard: FunctionComponent<HomeSelectCardProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.container}>
      <View style={{ padding: 15 }}>
        {/* <TransferIcon /> */}

        <MaterialCommunityIcons name="bank-transfer" size={52} color="#FF6600" />

        <Text style={{ textAlign: 'right', fontSize: fontsize.HEADER2, fontWeight: '700' }}>Transfer Funds</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appTheme.white,

    borderRadius: 3,
  },
})

export default HomeSelectCard
