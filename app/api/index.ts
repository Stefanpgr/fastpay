import axios from 'axios';
import {Alert} from 'react-native';
import Constants from 'expo-constants'

const config = {
  baseURL: 'https://api.paystack.co',
  timeout: 20000,
  headers: { 
    'Authorization': `Bearer ${Constants?.manifest?.extra?.paystackSecret}`,
  },
  withCredentials: true,
};

let instance = axios.create(config);



instance.interceptors.response.use(
  response => {

    return response;
  },
  async error => {
      console.log(error.code)
    if (error.code === 'Network Error') {
      return Alert.alert('Please check your internet connection.')
    }
if(error.code === 'ECONNABORTED'){
    return Alert.alert('Timeout Error', 'Please check your internet connection.')
}
    return Promise.reject(error);
  },
);


export default instance;
