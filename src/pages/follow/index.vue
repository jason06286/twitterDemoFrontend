<script setup>
import useUserStore from '@/stores/user';

import useFollowStore from '@/stores/follow';

import { formatFollowTime, formatFollowDays } from '@/methods/format';

const userStore = useUserStore();
const followStore = useFollowStore();

const isLoading = ref(false);

const init = async () => {
  isLoading.value = true;
  try {
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
  await init();
});
</script>
<template>
  <Loading :is-loading="isLoading" />
  <Navbar />
  <div class="container m-auto mt-0 mb-14 sm:mt-14 sm:mb-0">
    <div class="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
      <div class="hidden 2xl:block"></div>
      <div
        class="col-auto ml-0 text-gray-400 sm:mt-8 lg:col-span-2 lg:ml-5 xl:ml-0"
      >
        <div class="rounded-md bg-black p-5">
          <h3 class="mb-3 text-xl font-bold">追蹤名單</h3>
          <DotLine />
          <template v-if="followStore.following.length">
            <div
              v-for="follow in followStore.following"
              :key="follow.user.id"
              class="mb-5 flex items-center"
            >
              <div
                class="h-10 w-10 overflow-hidden rounded-full sm:h-12 sm:w-12"
              >
                <img :src="follow.user.photo" alt="avatar" />
              </div>
              <div class="ml-3 space-y-1 text-xs sm:text-sm">
                <router-link
                  :to="`/profile/${follow.user.id}`"
                  class="text-base font-bold sm:text-xl"
                >
                  {{ follow.user.name }}
                </router-link>

                <p>您已追蹤 {{ formatFollowDays(follow.followAt) }}</p>
                <p class="text-gray-500">
                  追蹤時間: {{ formatFollowTime(follow.followAt) }}
                </p>
              </div>
              <div class="ml-auto">
                <button
                  type="button"
                  class="cancel-btn bg-red-900/50"
                  @click="followStore.toggleFollow(follow.user.id)"
                >
                  取消追蹤
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="py-5">
              <p class="text-center">尚無追蹤任何人</p>
            </div>
          </template>
        </div>
      </div>
      <SideProfile @publishPost="isShowAddPostModal = true" />
    </div>
  </div>
</template>
<style></style>
