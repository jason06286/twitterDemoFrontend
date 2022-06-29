<script setup>
import useUserStore from '@/stores/user';
import { apiCheckStatus, setToken } from '@/api/api';

const router = useRouter();
const store = useUserStore();

async function checkStatus() {
  try {
    setToken();
    const res = await apiCheckStatus();
    if (res.data.status === 'success') {
      store.setUser(res.data.data.user);
      router.push('/auth/posts');
    }
  } catch (error) {
    router.push('/login');
  }
}
onMounted(() => {
  checkStatus();
});
</script>
<template>
  <router-view></router-view>
</template>
<style></style>
