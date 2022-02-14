import {combineReducers} from 'redux';
import {bankList, transfers} from './Bank/BankReducer';

export const reducers = combineReducers({
  bankList,
  transfers
});
export type RootState = ReturnType<typeof reducers>;
