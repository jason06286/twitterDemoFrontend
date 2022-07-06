<script setup>
import useUserStore from '@/stores/user';
import useFollowStore from '@/stores/follow';
import { apiGetPosts } from '@/api/api';

const userStore = useUserStore();
const followStore = useFollowStore();
const posts = ref([]);

const isShowFollowingModal = ref(false);
const isShowFollowerModal = ref(false);

const init = async () => {
  try {
    const postsRes = await apiGetPosts();
    posts.value = postsRes.data.data;
    await followStore.getFollow(userStore.user.id);
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await init();
});
</script>
<template>
  <Navbar />
  <div class="container m-auto mt-0 mb-14 sm:mt-14 sm:mb-0">
    <div class="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
      <div class="hidden 2xl:block"></div>
      <div class="col-auto ml-0 sm:mt-8 lg:col-span-2 lg:ml-5 xl:ml-0">
        <div class="mb-5 flex items-center rounded-md bg-black px-5 py-3">
          <div
            class="mr-3 h-10 w-10 overflow-hidden rounded-full md:h-12 md:w-12"
          >
            <img src="https://i.imgur.com/eInPDId.png" alt="avatar" />
          </div>
          <div
            class="group w-full cursor-pointer rounded-full bg-blue-900/50 px-4 py-1 hover:bg-blue-500/40 md:py-3 md:px-5"
          >
            <p class="font-semibold text-gray-400 group-hover:text-blue-500">
              What's happening?
            </p>
          </div>
        </div>
        <Post v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div class="sticky top-[90px] mx-8 mt-8 hidden h-[540px] lg:block">
        <div
          class="flex w-64 flex-col items-center rounded-md bg-black p-9 shadow-md"
        >
          <div class="h-16 w-16 overflow-hidden rounded-full">
            <img :src="userStore.user.photo" alt="avatar" />
          </div>
          <router-link
            :to="`/auth/posts/${userStore.user.id}`"
            class="my-3 text-2xl font-bold text-gray-400 hover:text-blue-400"
          >
            {{ userStore.user.name }}
          </router-link>
          <DotLine />
          <div class="grid w-full grid-cols-2">
            <div
              class="border-r-2 border-slate-500 px-5 py-2 text-center text-sm text-gray-400"
            >
              <h3>關注數</h3>
              <p
                class="cursor-pointer hover:text-blue-400"
                @click="isShowFollowerModal = true"
              >
                {{ followStore.follower.length }}
              </p>
            </div>
            <div class="px-5 py-2 text-center text-sm text-gray-400">
              <h3>追蹤中</h3>
              <p
                class="cursor-pointer hover:text-blue-400"
                @click="isShowFollowingModal = true"
              >
                {{ followStore.following.length }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-8 w-64 rounded-md bg-black p-9 shadow-md">
          <router-link
            class="mb-5 flex w-full items-center justify-center rounded-md border border-gray-400 bg-blue-900/50 px-3 py-2 font-bold text-gray-300 shadow-md shadow-blue-400 hover:bg-blue-400/50 hover:shadow-black"
            :to="`/auth/posts/${userStore.user.id}`"
          >
            <teenyicons:user-solid class="text-slate-400" />
            <span class="ml-3">個人資料</span>
          </router-link>
          <router-link
            class="mb-5 flex w-full items-center justify-center rounded-md border border-gray-400 bg-blue-900/50 px-3 py-2 font-bold text-gray-300 shadow-md shadow-blue-400 transition-all duration-200 hover:bg-blue-400/50 hover:shadow-black"
            to="/auth/follow"
          >
            <teenyicons:bell-solid class="text-yellow-400" />
            <span class="ml-3">追蹤名單</span>
          </router-link>
          <button
            class="flex w-full items-center justify-center rounded-md border border-gray-400 bg-blue-900/50 px-5 py-3 font-bold text-gray-300 shadow-md shadow-[#4785cc] transition-all duration-200 hover:bg-yellow-500 hover:text-black hover:shadow-black"
            type="button"
          >
            Tweet
          </button>
        </div>
      </div>
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
        v-for="follow in followStore.follower"
        :key="follow._id"
        class="mb-3 flex w-[300px] items-center"
      >
        <div class="mr-3 h-10 w-10 overflow-hidden rounded-full">
          <img :src="follow.user.photo" alt="avatar" />
        </div>
        <router-link class="font-bold" :to="`/auth/posts/${follow.user._id}`">{{
          follow.user.name
        }}</router-link>
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
        v-for="follow in followStore.following"
        :key="follow._id"
        class="mb-3 flex w-[300px] items-center"
      >
        <div class="mr-3 h-10 w-10 overflow-hidden rounded-full">
          <img :src="follow.user.photo" alt="avatar" />
        </div>
        <router-link class="font-bold" :to="`/auth/posts/${follow.user._id}`">{{
          follow.user.name
        }}</router-link>
        <button
          type="button"
          class="ml-auto rounded-md bg-red-900 py-2 px-2 text-sm hover:text-red-300"
          @click="followStore.toggleFollow(follow.user._id)"
        >
          取消追蹤
        </button>
      </div>
    </template>
  </Modal>
</template>
<style></style>
