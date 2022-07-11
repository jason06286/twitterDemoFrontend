<script setup>
import useUserStore from '@/stores/user';
import { setToken } from '@/api/api';

const route = useRoute();
const router = useRouter();
const store = useUserStore();

const { token, id } = route.query;

console.log('route.query :>> ', route.query);

const setData = () => {
  document.cookie = `twitterToken=${token}`;
  setToken();
  store.setUser(id);
  console.log('store.user :>> ', store.user);
  router.push('/');
};

onMounted(() => {
  setData();
});
</script>
<template><div></div></template>
<style></style>
