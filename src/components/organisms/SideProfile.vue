<script setup>
import useUserStore from '@/stores/user';
import useFollowStore from '@/stores/follow';

const emit = defineEmits(['publishPost']);

const route = useRoute();

const userStore = useUserStore();
const followStore = useFollowStore();

const isShowFollowingModal = ref(false);
const isShowFollowerModal = ref(false);

const judgeFollowing = (id) => {
  const filter = followStore.following.filter((item) => item.user._id === id);
  return filter.length;
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
      <router-link
        :to="`/profile/${userStore.user.id}`"
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
      <router-link
        class="confirm-btn mb-5"
        :to="`/profile/${userStore.user.id}`"
      >
        <teenyicons:user-solid class="text-slate-400" />
        <span class="ml-2">個人資料</span>
      </router-link>
      <router-link class="confirm-btn mb-5" to="/follow">
        <teenyicons:bell-solid class="text-yellow-400" />
        <span class="ml-2">追蹤名單</span>
      </router-link>
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
        v-for="follow in followStore.following"
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
          type="button"
          class="cancel-btn ml-auto bg-red-900/50"
          @click="followStore.toggleFollow(follow.user._id)"
        >
          取消追蹤
        </button>
      </div>
    </template>
  </Modal>
</template>
<style></style>
