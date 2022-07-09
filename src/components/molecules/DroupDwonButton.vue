<script setup>
import useUserStore from '@/stores/user';

const store = useUserStore();

const active = ref(false);

const logout = () => {
  document.cookie = 'twitterToken=;';
};
</script>

<template>
  <div class="relative">
    <button
      type="button"
      class="flex items-center rounded-full px-2 py-1 transition-all duration-200 hover:bg-blue-300/20"
      :class="active && 'bg-blue-300/20'"
      @click="active = !active"
    >
      <img :src="store.user.photo" alt="avatar" class="h-8 w-8 rounded-full" />
      <span class="ml-2">{{ store.user.name }}</span>
    </button>
    <div
      class="absolute bottom-0 right-0 z-10 w-36 translate-y-full overflow-hidden bg-black shadow-md shadow-slate-600 transition-all duration-500"
      :class="active ? 'h-[148px]' : 'h-0'"
    >
      <router-link
        to="/auth/follow"
        class="flex items-center gap-1 border-b border-gray-500 py-2 px-3 text-sm text-gray-400 transition-all duration-200 last:border-b-0 hover:bg-blue-300/20"
      >
        <bi:bell-fill />
        <span>追蹤名單</span>
      </router-link>
      <router-link
        :to="`/auth/profile/${store.user.id}`"
        class="flex items-center gap-1 border-b border-gray-500 py-2 px-3 text-sm text-gray-400 transition-all duration-200 last:border-b-0 hover:bg-blue-300/20"
      >
        <carbon:user-profile />
        <span>個人貼文牆</span>
      </router-link>
      <router-link
        :to="`/auth/profile/${store.user.id}`"
        class="flex items-center gap-1 border-b border-gray-500 py-2 px-3 text-sm text-gray-400 transition-all duration-200 last:border-b-0 hover:bg-blue-300/20"
      >
        <mdi:credit-card-edit />
        <span>編輯個人資料</span>
      </router-link>
      <router-link
        to="/login"
        class="flex items-center gap-1 border-b border-gray-500 py-2 px-3 text-sm text-gray-400 transition-all duration-200 last:border-b-0 hover:bg-blue-300/20"
        @click="logout"
      >
        <mdi:logout />
        <span>登出</span>
      </router-link>
    </div>
  </div>
</template>

<style></style>
