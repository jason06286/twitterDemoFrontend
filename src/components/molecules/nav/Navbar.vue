<script setup>
import useUserStore from '@/stores/user';

const route = useRoute();
const router = useRouter();

const userStore = useUserStore();

const redirectLink = (url) => {
  router.push(url);
};

const logout = () => {
  document.cookie = 'twitterToken=; expires=; path=/';
  router.push('/login');
};
</script>
<template>
  <nav class="fixed left-0 right-0 top-0 z-10 hidden bg-black py-1 sm:block">
    <div
      class="container m-auto flex items-center justify-between px-3 xl:px-0"
    >
      <div
        class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-blue-300/20"
        @click="redirectLink('/')"
      >
        <mdi:twitter class="text-2xl" />
      </div>
      <SearchInput />
      <DroupDwonButton class="hidden sm:block" />
    </div>
  </nav>
  <nav
    class="fixed left-0 right-0 bottom-0 grid h-16 grid-cols-4 rounded-t-2xl bg-black sm:hidden"
  >
    <div
      class="group relative flex h-full cursor-pointer items-center justify-center py-3 text-xl text-slate-400"
      :class="route.path === '/' && 'border-b-4 text-teal-50'"
      @click="redirectLink('/')"
    >
      <template v-if="route.path !== '/'">
        <teenyicons:home-outline class="absolute" />
      </template>
      <template v-else>
        <teenyicons:home-solid class="absolute text-teal-50" />
      </template>
      <span
        class="absolute top-0 rounded-md bg-white px-3 py-2 text-gray-500 opacity-0 transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-100"
        >Home</span
      >
    </div>
    <div
      class="group relative flex h-full cursor-pointer items-center justify-center py-3 text-xl text-slate-400"
      :class="route.path === '/follow' && 'border-b-4 border-teal-50'"
      @click="redirectLink('/follow')"
    >
      <template v-if="route.path !== '/follow'">
        <teenyicons:bell-outline class="absolute" />
      </template>
      <template v-else>
        <teenyicons:bell-solid class="absolute text-teal-50" />
      </template>
      <span
        class="absolute top-0 rounded-md bg-white px-3 py-2 text-gray-500 opacity-0 transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-100"
        >Follwers</span
      >
    </div>
    <div
      class="group relative flex h-full cursor-pointer items-center justify-center py-3 text-xl text-slate-400"
      :class="
        route.path === `/profile/${userStore.user.id}` &&
        'border-b-4  border-teal-50'
      "
      @click="redirectLink(`/profile/${userStore.user.id}`)"
    >
      <template v-if="route.path !== `/profile/${userStore.user.id}`">
        <teenyicons:user-outline class="absolute" />
      </template>
      <template v-else>
        <teenyicons:user-solid class="absolute text-teal-50" />
      </template>
      <span
        class="absolute top-0 rounded-md bg-white px-3 py-2 text-gray-500 opacity-0 transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-100"
        >Profile</span
      >
    </div>
    <div
      class="group relative flex h-full cursor-pointer items-center justify-center py-3 text-xl text-slate-400"
      @click="logout"
    >
      <teenyicons:logout-outline class="absolute" />
      <span
        class="absolute top-0 rounded-md bg-white px-3 py-2 text-gray-500 opacity-0 transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-100"
        >SignOut</span
      >
    </div>
  </nav>
</template>
<style></style>
