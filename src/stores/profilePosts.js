import useUserStore from '@/stores/user';
import { apiGetProfilePosts } from '@/api/api';

const useProfilePostsStore = defineStore('profile-post', () => {
  const store = useUserStore();

  const posts = ref([]);

  const getProfilePosts = async (id) => {
    try {
      const res = await apiGetProfilePosts(id);
      posts.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    posts,
    getProfilePosts,
  };
});

export default useProfilePostsStore;
