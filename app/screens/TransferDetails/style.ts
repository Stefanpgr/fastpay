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
    breakDownTxtTitle: {
        fontSize: fontsize.SUBTEXT,
        fontWeight: '600'
    },
    breakDownTxt: {
        fontSize: fontsize.SUBTEXT,
        textAlign: 'right'
        
    }
})

export default styles;