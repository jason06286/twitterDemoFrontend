const useCounterStore = defineStore('home', () => {
  const name = ref('John');
  const setName = (nick) => {
    name.value = nick;
  };
  return {
    name,
    setName,
  };
});

export default useCounterStore;
