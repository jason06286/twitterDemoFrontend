const useUserStore = defineStore('user', () => {
  const user = ref({});
  const setUser = (userData) => {
    const { name, photo, _id, ...data } = userData;
    user.value = {
      name,
      photo,
      id: _id,
      data,
    };
  };
  return {
    user,
    setUser,
  };
});

export default useUserStore;
