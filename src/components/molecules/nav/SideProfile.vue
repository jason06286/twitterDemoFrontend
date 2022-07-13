<script setup>
import useUserStore from '@/stores/user';
import useFollowStore from '@/stores/follow';

const emit = defineEmits(['publishPost']);

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();
const followStore = useFollowStore();

const isShowFollowingModal = ref(false);
const isShowFollowerModal = ref(false);

const toggleFollow = (id) => {
  followStore.toggleFollow(id);
};
const redirectLink = (url) => {
  router.push(url);
};
</script>
<template>
  <div class="sticky top-[90px] mx-8 mt-8 hidden h-[540px] lg:block">
    <div
      class="flex w-64 flex-col items-center rounded-md bg-black p-9 shadow-md"
    >
      <div class="h-16 w-16 overflow-hidden rounded-full">
        <img :src="userStore.user.photo" alt="avatar" />
      </div>
      <div
        class="my-3 cursor-pointer text-2xl font-bold text-gray-400 hover:text-blue-400"
        @click="redirectLink(`/profile/${userStore.user.id}`)"
      >
        {{ userStore.user.name }}
      </div>
      <DotLine />
      <div class="grid w-full grid-cols-2">
        <div
          class="border-r-2 border-slate-500 px-5 py-2 text-center text-sm text-gray-400"
        >
          <h3>關注數</h3>
          <p
            v-if="!followStore.follower.length"
            class="cursor-pointer hover:text-blue-400"
          >
            0
          </p>
          <p
            v-else
            class="cursor-pointer hover:text-blue-400"
            @click="isShowFollowerModal = true"
          >
            {{ followStore.follower.length }}
          </p>
        </div>
        <div class="px-5 py-2 text-center text-sm text-gray-400">
          <h3>追蹤中</h3>
          <p
            v-if="!followStore.following.length"
            class="cursor-pointer hover:text-blue-400"
          >
            0
          </p>
          <p
            v-else
            class="cursor-pointer hover:text-blue-400"
            @click="isShowFollowingModal = true"
          >
            {{ followStore.following.length }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 w-64 rounded-md bg-black p-9 shadow-md">
      <div
        class="confirm-btn mb-5"
        @click="redirectLink(`/profile/${userStore.user.id}`)"
      >
        <teenyicons:user-solid class="text-slate-400" />
        <span class="ml-2">個人資料</span>
      </div>
      <div class="confirm-btn mb-5" @click="redirectLink(`/follow`)">
        <teenyicons:bell-solid class="text-yellow-400" />
        <span class="ml-2">追蹤名單</span>
      </div>
      <button
        v-if="route.path !== '/follow'"
        class="confirm-btn group w-full bg-blue-900/50 hover:bg-yellow-400 hover:text-gray-800"
        type="button"
        @click="emit('publishPost')"
      >
        <ic:sharp-publish
          class="text-xl text-blue-300 group-hover:text-blue-800"
        />
        <span class="ml-2">發布貼文</span>
      </button>
    </div>
  </div>

  <FollwerModal
    v-model="isShowFollowerModal"
    :follower="followStore.follower"
    :following="followStore.following"
    @toggleFollow="toggleFollow"
  />
  <FollowingModal
    v-model="isShowFollowingModal"
    :following="followStore.following"
    @toggleFollow="toggleFollow"
  />
</template>
<style></style>
