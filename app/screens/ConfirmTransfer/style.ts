import { StyleSheet } from "react-native";
import { appTheme, fontsize } from "../../config";

const styles = StyleSheet.create({
    buttonWrp: {
        paddingHorizontal: 24,
        marginBottom: 10
    },
    breakDownCont: {
        justifyContent: 'space-between',
        marginVertical: 10,
        flexDirection: 'row'
    },
    breakDownTxt: {
        fontSize: fontsize.HEADER3
    }
})

export default styles;