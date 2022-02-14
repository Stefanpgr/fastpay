import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  content: { paddingHorizontal: Platform.OS === 'android' ? 10 : 20, marginTop: 30, paddingBottom: 50 },
})

export default styles
