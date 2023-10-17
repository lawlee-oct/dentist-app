import { get } from 'lodash';
import { AxiosClient } from 'src/configs/axios/axios';

const AUTH_API = {
  loginAPI: async (params: Auth.LoginRequestData) => {
    const response: Auth.LoginResponse = await new AxiosClient().post('/login', params);
    return response;
  },

  logoutAPI: async () => {
    const response = await new AxiosClient().post('/logout');
    const data = get(response, 'message', null);
    return data;
  },

  getMeAPI: async () => {
    const response = await new AxiosClient().get('/profile');
    const data = get(response, 'data', null);

    return data;
  },
};

export default AUTH_API;
