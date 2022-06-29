<script setup>
import useUserStore from '@/stores/user';
import { setToken } from '@/api/api';

const route = useRoute();
const router = useRouter();
const store = useUserStore();

const { token, name, id, photo } = route.params;

console.log('route.params :>> ', route.params);

const setData = () => {
  document.cookie = `twitterToken=${token}`;
  setToken();
  const user = { name, id, photo };
  store.setUser(user);
  console.log('store.user :>> ', store.user);
  router.push('/auth/posts');
};

onMounted(() => {
  setData();
});
</script>
<template><div></div></template>
<style></style>
