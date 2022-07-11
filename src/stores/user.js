import { apiGetProfile } from '@/api/api';

const useUserStore = defineStore('user', () => {
  const user = ref({});
  const setUser = async (id) => {
    try {
      const res = await apiGetProfile(id);
      const { _id, name, isThirdPartyLogin, photo } = res.data.data.user;
      const { coverImage = '', description = '' } = res.data.data;
      user.value = {
        id: _id,
        name,
        isThirdPartyLogin,
        photo,
        coverImage,
        description,
      };
      console.log('userStore :>> ', user.value);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    setUser,
  };
});

export default useUserStore;
