<script setup>
import useUserStore from '@/stores/user';

import { apiCheckStatus, setToken } from '@/api/api';

const router = useRouter();

const userStore = useUserStore();
const checkStatus = async () => {
  try {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)twitterToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    if (!token) return router.push('/login');
    setToken();
    const res = await apiCheckStatus();
    if (res.data.status === 'success') {
      userStore.setUser(res.data.data.user.id);
    }
  } catch (error) {
    router.push('/login');
  }
};

onMounted(() => {
  checkStatus();
});
</script>
<template>
  <router-view></router-view>
</template>
<style></style>
