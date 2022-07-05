<script setup>
import { formatTime } from '@/methods/formatTime';

defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const commentDom = null;
const openComment = ref(false);
</script>
<template>
  <div class="mb-5 rounded-md bg-black px-5 py-3 text-gray-400">
    <div class="mb-5 flex border-b border-gray-700 pb-2">
      <div class="h-10 w-10 overflow-hidden rounded-full md:h-12 md:w-12">
        <img :src="post.user.photo" alt="avatar" />
      </div>
      <div class="ml-2">
        <h2 class="font-bold md:text-xl">{{ post.user.name }}</h2>
        <p class="text-sm text-gray-500">{{ formatTime(post.createdAt) }}</p>
      </div>
    </div>
    <div class="border-b border-gray-700 pb-2">
      <div class="mb-5">
        {{ post.content }}
      </div>
      <div class="mb-5">
        <img
          v-for="image in post.images"
          :key="image"
          :src="image"
          alt="post"
        />
      </div>
      <div class="mb-3 flex gap-2">
        <div v-if="!post.likes.length" class="flex items-center text-gray-500">
          <ri:heart-3-line class="mr-1" />
          <p>成為第一個喜歡的朋友</p>
        </div>
        <div
          v-else
          class="group flex cursor-pointer items-center text-gray-400"
        >
          <ri:heart-3-fill class="mr-1 text-red-600" />
          <p class="group-hover:text-blue-500">
            {{ post.likes.length }} 個人喜歡
          </p>
        </div>
        <div
          v-if="!post.comments.length"
          class="flex items-center text-gray-500"
        >
          <ri:chat-1-line class="mr-1" />
          <p>尚無留言</p>
        </div>
        <div
          v-else
          class="group flex cursor-pointer items-center text-gray-400"
          @click="openComment = !openComment"
        >
          <ri:chat-1-fill class="mr-1 text-blue-500" />
          <p class="group-hover:text-blue-500">
            {{ post.comments.length }} 則留言
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 border-b border-gray-700">
      <div
        class="flex cursor-pointer items-center justify-center border-r border-gray-700 py-3 transition-all duration-200 hover:bg-red-500/30 hover:text-pink-300"
      >
        <ri:heart-3-line class="mr-1" />
        喜歡
      </div>
      <div
        class="flex cursor-pointer items-center justify-center border-r border-gray-700 py-3 transition-all duration-200 hover:bg-blue-500/30 hover:text-blue-300"
        @click="commentDom.focus()"
      >
        <ri:chat-1-line class="mr-1" />
        留言
      </div>
      <div
        class="flex cursor-pointer items-center justify-center py-3 transition-all duration-200 hover:bg-green-500/30 hover:text-green-300"
      >
        <ri:share-box-line class="mr-1" />
        分享
      </div>
    </div>
    <div v-if="openComment" class="my-3">
      <div v-for="comment in post.comments" :key="comment._id" class="flex">
        <div class="mr-3 h-8 w-8 overflow-hidden rounded-full">
          <img :src="comment.commenter.photo" alt="avatar" />
        </div>
        <div class="rounded-lg bg-blue-900/50 px-3 py-2">
          <div class="flex justify-between">
            <h3 class="mr-3 font-bold">{{ comment.commenter.name }}</h3>
            <p class="text-sm text-gray-600">
              {{ formatTime(comment.createAt) }}
            </p>
          </div>
          <p>{{ comment.content }}</p>
        </div>
      </div>
    </div>
    <div class="mt-3 flex items-center">
      <div class="mr-2 h-9 w-9 overflow-hidden rounded-full">
        <img src="https://i.imgur.com/eInPDId.png" alt="avatar" />
      </div>
      <label class="flex w-full rounded-full bg-blue-900/50 py-1">
        <input
          ref="commentDom"
          type="text"
          class="ml-3 mr-auto shrink grow border-none bg-transparent py-0.5 focus:outline-none"
          placeholder="留言..."
        />
        <button
          type="button"
          class="mx-1 flex shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-800 to-slate-600 px-2 text-sm text-gray-300 transition-all duration-200 hover:bg-gradient-to-tr hover:from-slate-400 hover:to-blue-700"
        >
          <span>留言</span>
        </button>
      </label>
    </div>
  </div>
</template>
<style></style>
