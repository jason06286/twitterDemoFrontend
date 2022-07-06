import { apiGetLikes, apiToggleLikes } from '@/api/api';

export default function like() {
  const likes = ref([]);

  const getLikes = async (id) => {
    const res = await apiGetLikes(id);
    likes.value = res.data.data;
  };
  const toggleLikes = async (id) => {
    await apiToggleLikes(id);
    getLikes(id);
  };

  return {
    likes,
    getLikes,
    toggleLikes,
  };
}
