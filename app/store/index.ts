import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducers} from '../redux';


const store = createStore(reducers, {}, applyMiddleware(thunk));
export default store