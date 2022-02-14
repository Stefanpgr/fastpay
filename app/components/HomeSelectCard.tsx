import { FunctionComponent } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { appTheme, fontsize } from '../config'

interface HomeSelectCardProps {
    onPress: any;
    title: string;
    iconName: string;
    iconColor?: string;
}

const HomeSelectCard: FunctionComponent<HomeSelectCardProps> = ({onPress, title, iconName, iconColor = "#FF6600"}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.container}>
      <View style={{ padding: 15 }}>
        {/* <TransferIcon /> */}

        <MaterialCommunityIcons name={iconName} size={52} color={iconColor} />

        <Text style={{ textAlign: 'right', fontSize: fontsize.HEADER2, fontWeight: '700' }}>{title}</Text>
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
