<script setup>
import useUserStore from '@/stores/user';

import useFollowStore from '@/stores/follow';
import { apiGetPosts, apiCheckStatus, setToken } from '@/api/api';

const router = useRouter();

const userStore = useUserStore();
const followStore = useFollowStore();

const posts = ref([]);

const isShowAddPostModal = ref(false);
const isLoading = ref(false);

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

const init = async () => {
  isLoading.value = true;
  try {
    const postsRes = await apiGetPosts();
    posts.value = postsRes.data.data;
    await followStore.getFollow(userStore.user.id);
  } catch (error) {
    console.error(error);
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  isLoading.value = false;
};

onMounted(async () => {
  await checkStatus();
  await init();
});
</script>
<template>
  <Loading :is-loading="isLoading" />
  <Navbar />
  <div class="container m-auto mt-0 mb-14 sm:mt-14 sm:mb-0">
    <div class="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
      <div class="hidden 2xl:block"></div>
      <div class="col-auto ml-0 sm:mt-8 lg:col-span-2 lg:ml-5 xl:ml-0">
        <div class="mb-5 flex items-center rounded-md bg-black px-5 py-3">
          <div
            class="mr-3 h-10 w-10 flex-shrink-0 overflow-hidden rounded-full md:h-12 md:w-12"
          >
            <img :src="userStore.user.photo" alt="avatar" />
          </div>
          <div
            class="group w-full flex-shrink cursor-pointer rounded-full bg-blue-900/50 px-4 py-1 hover:bg-blue-500/40 md:py-3 md:px-5"
            @click="isShowAddPostModal = true"
          >
            <p class="font-semibold text-gray-400 group-hover:text-blue-500">
              What's happening?
            </p>
          </div>
        </div>
        <Post
          v-for="post in posts"
          :key="post.id"
          :post="post"
          :is-admin="false"
          @init="init"
        />
      </div>
      <SideProfile @publishPost="isShowAddPostModal = true" />
    </div>
  </div>
  <PublishPostModal v-model="isShowAddPostModal" @publish="init">
  </PublishPostModal>
</template>
<style></style>
