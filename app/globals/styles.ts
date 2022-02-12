import { Platform, StyleSheet } from "react-native";
import { appTheme } from "../config";

const globalStyles = StyleSheet.create({
    layout:{
        flex: 1,
        backgroundColor: appTheme.white,
    },
    container: {
        marginTop: Platform.OS === 'android' ? 120 : 40,
        paddingHorizontal: 24
    },
})

export default globalStyles;