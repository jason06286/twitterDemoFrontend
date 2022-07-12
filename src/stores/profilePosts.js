import { apiGetProfilePosts } from '@/api/api';

const useProfilePostsStore = defineStore('profile-post', () => {
  const posts = ref([]);

  const getProfilePosts = async (id) => {
    try {
      const res = await apiGetProfilePosts(id);
      posts.value = res.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    posts,
    getProfilePosts,
  };
});

export default useProfilePostsStore;
