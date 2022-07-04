<script setup>
import { apiGetPosts } from '@/api/api';

onMounted(async () => {
  const res = await apiGetPosts();
  console.log('res :>> ', res);
});
</script>
<template>
  <Navbar />
  <div class="container m-auto h-[3000px] sm:mt-14">
    <div class="text-3xl">Welcome to Posts</div>
  </div>
</template>
<style></style>
