<script setup>
import useUserStore from '@/stores/user';

const router = useRouter();

const store = useUserStore();

const active = ref(false);

const redirect = (url) => {
  active.value = false;
  router.push(url);
};

const logout = () => {
  document.cookie = 'twitterToken=;';
  redirect(`/login`);
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
      <div
        class="flex cursor-pointer items-center gap-1 border-b border-gray-500 py-2 px-3 text-sm text-gray-400 transition-all duration-200 last:border-b-0 hover:bg-blue-300/20"
        @click="redirect('/follow')"
      >
        <bi:bell-fill />
        <span>追蹤名單</span>
      </div>
      <div
        class="flex cursor-pointer items-center gap-1 border-b border-gray-500 py-2 px-3 text-sm text-gray-400 transition-all duration-200 last:border-b-0 hover:bg-blue-300/20"
        @click="redirect(`/profile/${store.user.id}`)"
      >
        <carbon:user-profile />
        <span>個人貼文牆</span>
      </div>
      <div
        class="flex cursor-pointer items-center gap-1 border-b border-gray-500 py-2 px-3 text-sm text-gray-400 transition-all duration-200 last:border-b-0 hover:bg-blue-300/20"
        @click="redirect(`/profile/${store.user.id}`)"
      >
        <mdi:credit-card-edit />
        <span>編輯個人資料</span>
      </div>
      <div
        class="flex cursor-pointer items-center gap-1 border-b border-gray-500 py-2 px-3 text-sm text-gray-400 transition-all duration-200 last:border-b-0 hover:bg-blue-300/20"
        @click="logout"
      >
        <mdi:logout />
        <span>登出</span>
      </div>
    </div>
  </div>
</template>

<style></style>
