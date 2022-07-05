<script setup>
import { apiGetPosts } from '@/api/api';

const posts = ref([]);

onMounted(async () => {
  const res = await apiGetPosts();
  posts.value = res.data.data;
  console.log('posts :>> ', res);
});
</script>
<template>
  <Navbar />
  <div class="container z-0 m-auto mt-0 mb-14 sm:mt-14 sm:mb-0">
    <div class="grid md:grid-cols-3 lg:grid-cols-4">
      <div class="hidden lg:block"></div>
      <div class="col-auto md:col-span-2 md:mt-8">
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
        <Post v-for="(post, index) in posts" :key="post.id" :post="post" />
      </div>
      <div class="sticky top-[90px] -z-10 mx-8 mt-8 hidden h-[540px] md:block">
        <div
          class="flex w-64 flex-col items-center rounded-md bg-black p-9 shadow-md"
        >
          <div class="h-16 w-16 overflow-hidden rounded-full">
            <img src="https://i.imgur.com/eInPDId.png" alt="avatar" />
          </div>
          <router-link
            to="/"
            class="my-3 text-2xl font-bold text-gray-400 hover:text-blue-500"
          >
            123
          </router-link>
          <div
            class="relative mb-3 h-[2px] w-full bg-slate-500 before:absolute before:right-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-slate-500 after:absolute after:left-0 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-full after:bg-slate-500"
          ></div>
          <div class="grid w-full grid-cols-2">
            <div
              class="border-r-2 border-slate-500 px-5 py-2 text-center text-sm text-gray-400"
            >
              <h3>關注數</h3>
              <p class="cursor-pointer hover:text-blue-500">0</p>
            </div>
            <div class="px-5 py-2 text-center text-sm text-gray-400">
              <h3>追蹤中</h3>
              <p class="cursor-pointer hover:text-blue-500">0</p>
            </div>
          </div>
        </div>
        <div class="mt-8 w-64 rounded-md bg-black p-9 shadow-md">
          <button
            class="mb-5 flex w-full items-center justify-center rounded-md border border-gray-400 bg-blue-900/50 px-3 py-2 font-bold text-gray-300 shadow-md shadow-blue-400 hover:bg-blue-400/50 hover:shadow-black"
            type="button"
          >
            <teenyicons:user-solid class="text-slate-400" />
            <span class="ml-3">個人資料</span>
          </button>
          <button
            class="mb-5 flex w-full items-center justify-center rounded-md border border-gray-400 bg-blue-900/50 px-3 py-2 font-bold text-gray-300 shadow-md shadow-blue-400 transition-all duration-200 hover:bg-blue-400/50 hover:shadow-black"
            type="button"
          >
            <teenyicons:bell-solid class="text-yellow-400" />
            <span class="ml-3">追蹤名單</span>
          </button>
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
</template>
<style></style>
