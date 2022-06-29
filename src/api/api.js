import axios from 'axios';

let baseRequest;

export const setToken = () => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)twitterToken\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  baseRequest = axios.create({
    baseURL: `https://fast-tundra-64548.herokuapp.com/api/`,
  });
};
baseRequest = axios.create({
  baseURL: `https://fast-tundra-64548.herokuapp.com/api/`,
});
export const apiGoogle = () => baseRequest.get('auth/google');

export const apiCheckStatus = () => baseRequest.get('user/check');
export const apiLogin = (user) => baseRequest.post('user/login', user);
export const apiRegister = (user) => baseRequest.post('user/register', user);