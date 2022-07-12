<script setup>
import moment from 'moment';

import useUserStore from '@/stores/user';
import { setToken } from '@/api/api';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const { token, id } = route.query;

const setData = () => {
  const date = moment().utc().add(7, 'days').format();
  document.cookie = `twitterToken=${token}; expires=${date}; path=/`;
  setToken();
  userStore.setUser(id);
  router.push('/');
};

onMounted(() => {
  setData();
});
</script>
<template><div></div></template>
<style></style>
