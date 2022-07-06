import useUserStore from '@/stores/user';
import { apiGetFollow, apiToggleFollow } from '@/api/api';

const useFollowStore = defineStore('follow', () => {
  const store = useUserStore();

  const following = ref([]);
  const follower = ref([]);

  const getFollow = async (id) => {
    try {
      const res = await apiGetFollow(id);
      following.value = res.data.data.following;
      follower.value = res.data.data.follower;
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFollow = async (id) => {
    try {
      await apiToggleFollow(id);
      await getFollow(store.user.id);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    follower,
    following,
    toggleFollow,
    getFollow,
  };
});

export default useFollowStore;
