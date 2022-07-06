<script setup>
const route = useRoute();

const logout = () => {
  document.cookie = 'twitterToken=;';
};
</script>
<template>
  <nav class="fixed left-0 right-0 top-0 z-10 hidden bg-black py-1 sm:block">
    <div
      class="container m-auto flex items-center justify-between px-1 sm:px-0"
    >
      <router-link
        to="/"
        class="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 hover:bg-blue-300/20"
      >
        <mdi:twitter class="text-2xl" />
      </router-link>
      <SearchInput />
      <DroupDwonButton class="hidden sm:block" />
    </div>
  </nav>
  <nav
    class="fixed left-0 right-0 bottom-0 grid h-16 grid-cols-4 rounded-t-2xl bg-black sm:hidden"
  >
    <router-link
      to="/posts"
      class="group relative flex h-full cursor-pointer items-center justify-center py-3 text-xl text-slate-400"
      :class="route.path === '/auth/posts' && 'border-b-4 text-teal-50'"
    >
      <template v-if="route.path !== '/auth/posts'">
        <teenyicons:home-outline class="absolute" />
      </template>
      <template v-else>
        <teenyicons:home-solid class="absolute text-teal-50" />
      </template>
      <span
        class="absolute top-0 rounded-md bg-white px-3 py-2 text-gray-500 opacity-0 transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-100"
        >Home</span
      >
    </router-link>
    <router-link
      to="/"
      class="group relative flex h-full cursor-pointer items-center justify-center py-3 text-xl text-slate-400"
      :class="route.path === '/auth/follow' && 'border-b-4 border-teal-50'"
    >
      <template v-if="route.path !== '/auth/follow'">
        <teenyicons:bell-outline class="absolute" />
      </template>
      <template v-else>
        <teenyicons:bell-solid class="absolute text-teal-50" />
      </template>
      <span
        class="absolute top-0 rounded-md bg-white px-3 py-2 text-gray-500 opacity-0 transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-100"
        >Follwers</span
      >
    </router-link>
    <router-link
      to="/"
      class="group relative flex h-full cursor-pointer items-center justify-center py-3 text-xl text-slate-400"
      :class="route.path === '/auth/profile' && 'border-b-4  border-teal-50'"
    >
      <template v-if="route.path !== '/auth/profile'">
        <teenyicons:user-outline class="absolute" />
      </template>
      <template v-else>
        <teenyicons:user-solid class="absolute text-teal-50" />
      </template>
      <span
        class="absolute top-0 rounded-md bg-white px-3 py-2 text-gray-500 opacity-0 transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-100"
        >Profile</span
      >
    </router-link>
    <router-link
      to="/login"
      class="group relative flex h-full cursor-pointer items-center justify-center py-3 text-xl text-slate-400"
      @click="logout"
    >
      <teenyicons:logout-outline class="absolute" />
      <span
        class="absolute top-0 rounded-md bg-white px-3 py-2 text-gray-500 opacity-0 transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-100"
        >SignOut</span
      >
    </router-link>
  </nav>
</template>
<style></style>
