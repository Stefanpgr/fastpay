import {combineReducers} from 'redux';
import {bankList, transactions} from './Bank/BankReducer';

export const reducers = combineReducers({
  bankList,
  transactions
});
export type RootState = ReturnType<typeof reducers>;
