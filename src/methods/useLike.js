import { apiGetLikes } from '@/api/api';

export default function useLike() {
  const getLikes = async (id) => {
    const res = await apiGetLikes(id);
    return res.data.data;
  };

  return {
    getLikes,
  };
}
