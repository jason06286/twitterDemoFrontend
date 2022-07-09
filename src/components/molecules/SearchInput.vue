<script setup>
import { apiGetUsers } from '@/api/api';

const router = useRouter();

const searchWord = ref('');
const users = ref([]);

const filterUsers = computed(() => {
  if (!searchWord.value) {
    return [];
  }
  return users.value.filter((user) => user.name.includes(searchWord.value));
});

const goSearching = (id = '') => {
  if (!id) return;
  router.push(`/auth/profile/${id}`);
};

onMounted(async () => {
  try {
    const res = await apiGetUsers();
    users.value = res.data.data.users;
  } catch (error) {
    console.log(error);
  }
});

const isOpen = ref(false);
</script>

<template>
  <div class="relative z-10">
    <label
      for="search"
      class="flex h-10 items-center rounded-full border border-gray-600 px-2 text-gray-400"
    >
      <input
        id="search"
        v-model="searchWord"
        type="text"
        placeholder="搜尋使用者..."
        class="ml-2 shrink border-none bg-transparent text-sm focus:outline-none"
        @focus="isOpen = true"
      />
      <button
        type="button"
        class="ml-1 flex h-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-800 to-slate-600 px-1 text-sm text-gray-300 transition-all duration-200 hover:bg-gradient-to-tr hover:from-slate-400 hover:to-blue-700 sm:px-2"
      >
        <span class="ml-1 hidden sm:block">搜尋</span>
        <ic:round-search class="ml-1 align-middle text-base" />
      </button>
    </label>
    <ul
      class="absolute w-full rounded-lg bg-black py-1 shadow shadow-gray-400 transition-all duration-200"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <li
        v-if="!filterUsers.length"
        class="flex cursor-pointer items-center px-3 py-2 text-gray-400 transition-all duration-200 hover:bg-blue-300/10"
      >
        <span>查無此使用者，請重新輸入..</span>
      </li>
      <template v-else>
        <li
          v-for="user in filterUsers"
          :key="user._id"
          class="flex cursor-pointer items-center px-3 py-2 transition-all duration-200 hover:bg-blue-300/10"
          @click="goSearching(user._id)"
        >
          <img :src="user.photo" alt="avatar" class="h-8 w-8 rounded-full" />
          <span class="ml-2">{{ user.name }}</span>
        </li>
      </template>
    </ul>
  </div>
  <div
    v-if="isOpen"
    class="fixed inset-0 -z-0 h-full w-full bg-transparent"
    @click.prevent="isOpen = false"
  ></div>
</template>
<style></style>
