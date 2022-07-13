import { apiGetLikes, apiToggleLikes } from '@/api/api';

export default function useLike() {
  const getLikes = async (id) => {
    const res = await apiGetLikes(id);
    return res.data.data;
  };
  const toggleLikes = async (id) => {
    await apiToggleLikes(id);
    getLikes(id);
  };

  return {
    getLikes,
    toggleLikes,
  };
}
