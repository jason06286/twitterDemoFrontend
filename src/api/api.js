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
export const apiGoogle = () => {
  window.location.href =
    'https://fast-tundra-64548.herokuapp.com/api/auth/google';
};

export const apiCheckStatus = () => baseRequest.get('user/check');
export const apiLogin = (user) => baseRequest.post('user/login', user);
export const apiRegister = (user) => baseRequest.post('user/register', user);

const token = document.cookie.replace(
  /(?:(?:^|.*;\s*)twitterToken\s*=\s*([^;]*).*$)|^.*$/,
  '$1'
);
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
baseRequest = axios.create({
  baseURL: `https://fast-tundra-64548.herokuapp.com/api/`,
});

export const apiGetUsers = () => baseRequest.get('user');
export const apiGetProfile = (id) => baseRequest.get(`user/profile/${id}`);
export const apiEditProfile = (data) => baseRequest.patch(`user/profile`, data);
export const apiResetPassword = (data) =>
  baseRequest.patch(`user/updatePassword`, data);

export const apiGetProfilePosts = (id) => baseRequest.get(`posts/user/${id}`);
export const apiGetPosts = () => baseRequest.get('posts');
export const apiAddPost = (data) => baseRequest.post(`post`, data);
export const apiEditPost = (id, data) => baseRequest.patch(`post/${id}`, data);
export const apiDeletePost = (id) => baseRequest.delete(`post/${id}`);

export const apiGetFollow = (id) => baseRequest.get(`follow/${id}`);
export const apiToggleFollow = (id) => baseRequest.patch(`follow/${id}`);

export const apiGetLikes = (id) => baseRequest.get(`post/${id}/likes`);
export const apiToggleLikes = (id) => baseRequest.patch(`post/${id}/likes`);

export const apiGetComments = (id) => baseRequest.get(`post/${id}/comments`);
export const apiPostComment = (id, data) =>
  baseRequest.post(`post/${id}/comments`, data);

export const apiSharePost = (id) => baseRequest.post(`post/share/${id}`);

export const apiUploadFile = (data) => baseRequest.post('uploadImage', data);
