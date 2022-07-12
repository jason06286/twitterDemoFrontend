import { apiGetProfile } from '@/api/api';

const useUserStore = defineStore('user', () => {
  const user = ref({});
  const setUser = async (userId) => {
    try {
      const res = await apiGetProfile(userId);
      const { id, name, isThirdPartyLogin, photo } = res.data.data.user;
      const { coverImage = '', description = '' } = res.data.data;
      user.value = {
        id,
        name,
        isThirdPartyLogin,
        photo,
        coverImage,
        description,
      };
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    setUser,
  };
});

export default useUserStore;
