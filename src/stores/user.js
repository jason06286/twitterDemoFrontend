const useUserStore = defineStore('user', () => {
  const user = ref({});
  const setUser = (userData) => {
    const { name, photo, _id, id, ...data } = userData;
    user.value = {
      name,
      photo,
      id: _id || id,
      data,
    };
  };
  return {
    user,
    setUser,
  };
});

export default useUserStore;
