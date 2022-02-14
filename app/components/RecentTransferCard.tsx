import { FunctionComponent } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { StyleSheet, Text, View } from "react-native";
import { currencyFormat, formatDate } from "../helpers";
import { appTheme, fontsize } from "../config";

interface RencentTransferCardProps {
    amount: number;
    account_name: string;
    bank_name: string;
    createdAt: string;
    reference: string;
    reason: string;
}
 
const RencentTransferCard: FunctionComponent<RencentTransferCardProps> = ({item}) => {

    return ( 
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <View style={{alignSelf: 'center'}}>
                <MaterialCommunityIcons name='bank-outline' size={30} />
                </View>
          
            <View style={styles.bankNameCont}>
                <Text numberOfLines={1} style={styles.accountNameTxt}>{item?.recipient?.details.account_name}</Text>
                <Text>{item?.recipient?.details.bank_name}</Text>
                
            </View>
            </View>
            
            <View style={{flexDirection: 'row'}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'column'}}>
                <Text style={[styles.amountDatetxt, {color: appTheme.red}]}>-{currencyFormat(item.amount / 100)}</Text>
                <Text style={styles.amountDatetxt}>{formatDate(item.createdAt, 'en-uk')}</Text>
                
                </View>
                <View style={{alignSelf: 'center'}}>
                <MaterialCommunityIcons name='chevron-right' size={30} />
                </View>
            </View>
           
        </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: appTheme.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 60,
    },
    bankNameCont:{flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 18},
    accountNameTxt: {width: 150, fontWeight: '600'},
    amountDatetxt:{
        fontSize: fontsize.SUBTEXT,
        textAlign: 'right'
    }
})

export default RencentTransferCard;