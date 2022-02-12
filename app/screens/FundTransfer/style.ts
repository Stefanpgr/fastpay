import { StyleSheet } from "react-native";
import { appTheme, fontsize } from "../../config";

const styles = StyleSheet.create({
    content: {
        marginTop: 40,
        paddingHorizontal: 24
    },
    label:{
        fontSize: fontsize.HEADER4,
        marginBottom: 6
    },
    textInput: {
        backgroundColor: appTheme.grey,
        height: 48,
        paddingHorizontal: 15,
        fontSize: fontsize.HEADER4,
        justifyContent: 'center',
        marginBottom: 20
    },
    selectedBank: {
        fontSize: fontsize.HEADER4,
        fontWeight: '500'
    }
})

export default styles;