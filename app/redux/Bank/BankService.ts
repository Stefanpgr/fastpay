import axiosclient from '../../api';

export const getBankList = () => {
  return axiosclient.get('/bank');
};

export const initiateTransferApi = (data) => {
    return axiosclient.post('/transferrecipient', data);
  };
  
  export const finalizeTransferApi = (data) => {
    return axiosclient.post('/transfer', data);
  };

  export const getTransfers = () => {
    return axiosclient.get('/transfer');
  };