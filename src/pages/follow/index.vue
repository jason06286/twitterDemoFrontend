<script setup>
import useUserStore from '@/stores/user';

import useFollowStore from '@/stores/follow';

import { formatFollowTime, formatTime } from '@/methods/format';

const userStore = useUserStore();
const followStore = useFollowStore();

const isShowFollowingModal = ref(false);
const isShowFollowerModal = ref(false);
const isLoading = ref(false);

const init = async () => {
  isLoading.value = true;
  try {
    await followStore.getFollow(userStore.user.id);
  } catch (error) {
    console.log(error);
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  isLoading.value = false;
};
const judgeFollowing = (id) => {
  const filter = followStore.following.filter((item) => item.user._id === id);
  return filter.length;
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
              :key="follow.user._id"
              class="mb-5 flex items-center"
            >
              <div
                class="h-10 w-10 overflow-hidden rounded-full sm:h-12 sm:w-12"
              >
                <img :src="follow.user.photo" alt="avatar" />
              </div>
              <div class="ml-3 space-y-1 text-xs sm:text-sm">
                <router-link
                  :to="`/auth/profile/${follow.user._id}`"
                  class="text-base font-bold sm:text-xl"
                >
                  {{ follow.user.name }}
                </router-link>

                <p>您已追蹤 {{ formatTime(follow.followAt) }}</p>
                <p class="text-gray-500">
                  追蹤時間: {{ formatFollowTime(follow.followAt) }}
                </p>
              </div>
              <div class="ml-auto">
                <button
                  type="button"
                  class="cancel-btn bg-red-900/50"
                  @click="followStore.toggleFollow(follow.user._id)"
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
  <Modal v-model="isShowFollowerModal">
    <template #title>誰追蹤我</template>
    <div
      v-if="!followStore.follower.length"
      class="flex h-full w-[300px] items-center justify-center text-sm"
    >
      還沒有任何人追蹤
    </div>
    <template v-else>
      <div
        v-for="follow in follower"
        :key="follow._id"
        class="mb-3 flex w-[300px] items-center"
      >
        <div class="mr-3 h-10 w-10 overflow-hidden rounded-full">
          <img :src="follow.user.photo" alt="avatar" />
        </div>
        <router-link class="font-bold" :to="`/profile/${follow.user._id}`">{{
          follow.user.name
        }}</router-link>
        <button
          v-if="judgeFollowing(follow.user._id)"
          type="button"
          class="cancel-btn ml-auto bg-red-900/50"
          @click="followStore.toggleFollow(follow.user._id)"
        >
          <span>取消追蹤</span>
        </button>
        <button
          v-else
          type="button"
          class="confirm-btn ml-auto"
          :class="userStore.user.id === follow.user._id && 'hidden'"
          @click="followStore.toggleFollow(follow.user._id)"
        >
          <span>追蹤</span>
        </button>
      </div>
    </template>
  </Modal>
  <Modal v-model="isShowFollowingModal">
    <template #title>追蹤名單</template>
    <div
      v-if="!followStore.following.length"
      class="flex h-full w-[300px] items-center justify-center text-sm"
    >
      尚未追蹤任何人
    </div>
    <template v-else>
      <div
        v-for="follow in following"
        :key="follow._id"
        class="mb-3 flex w-[300px] items-center"
      >
        <div class="mr-3 h-10 w-10 overflow-hidden rounded-full">
          <img :src="follow.user.photo" alt="avatar" />
        </div>
        <router-link class="font-bold" :to="`/profile/${follow.user._id}`">{{
          follow.user.name
        }}</router-link>

        <button
          v-if="judgeFollowing(follow.user._id)"
          type="button"
          class="cancel-btn ml-auto bg-red-900/50"
          @click="followStore.toggleFollow(follow.user._id)"
        >
          <span>取消追蹤</span>
        </button>
        <button
          v-else
          type="button"
          class="confirm-btn ml-auto"
          :class="userStore.user.id === follow.user._id && 'hidden'"
          @click="followStore.toggleFollow(follow.user._id)"
        >
          <span>追蹤</span>
        </button>
      </div>
    </template>
  </Modal>
</template>
<style></style>
