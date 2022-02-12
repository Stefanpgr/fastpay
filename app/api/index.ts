import axios from 'axios';
import {Alert} from 'react-native';


const config = {
  baseURL: 'https://api.paystack.co',
  timeout: 20000,
  headers: {
    'Authorization': `Bearer sk_test_fa92056e0b08431917ff5f21b7755d7c5e696bad`,
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
