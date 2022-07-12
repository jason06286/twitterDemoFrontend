<script setup>
import useUserStore from '@/stores/user';

import { formatTime } from '@/methods/format';
import { apiGetComments, apiPostComment } from '@/api/api';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const userStore = useUserStore();

const router = useRouter();

const commentDom = ref();

const comments = ref([]);
const content = ref('');
const isOpenComment = ref(false);
const isLoading = ref(false);

watchEffect(() => {
  comments.value = props.post.comments;
});

const redirectLink = (url) => {
  router.push(url);
};
const focusComment = () => {
  commentDom.value.focus();
};
const openComment = () => {
  isOpenComment.value = !isOpenComment.value;
};
const postComment = async (id) => {
  try {
    isLoading.value = true;
    await apiPostComment(id, { content: content.value });
    const res = await apiGetComments(id);
    comments.value = res.data.data;
    isLoading.value = false;
    isOpenComment.value = true;
    content.value = '';
  } catch (error) {
    console.error(error);
  }
};
defineExpose({ comments, focusComment, openComment });
</script>
<template>
  <div v-if="isOpenComment" class="my-3">
    <div v-for="comment in comments" :key="comment.id" class="mb-3 flex">
      <div
        class="mr-3 h-8 w-8 cursor-pointer overflow-hidden rounded-full"
        @click="redirectLink(`/profile/${comment.commenter.id}`)"
      >
        <img :src="comment.commenter.photo" alt="avatar" />
      </div>
      <div class="rounded-lg bg-blue-900/50 px-3 py-2">
        <div class="flex justify-between">
          <div
            class="mr-3 cursor-pointer font-bold"
            @click="redirectLink(`/profile/${comment.commenter.id}`)"
          >
            {{ comment.commenter.name }}
          </div>
          <p class="text-sm text-gray-600">
            {{ formatTime(comment.createdAt) }}
          </p>
        </div>
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </div>
  <div class="mt-3 flex items-center">
    <div class="mr-2 h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
      <img :src="userStore.user.photo" alt="avatar" />
    </div>
    <label class="flex w-full flex-shrink rounded-full bg-blue-900/50 py-1">
      <div v-if="isLoading" class="ml-5 mt-1 flex shrink grow">
        <p>留言</p>
        <eos-icons:three-dots-loading class="text-2xl text-blue-300" />
      </div>
      <input
        v-else
        ref="commentDom"
        v-model.trim="content"
        type="text"
        class="ml-3 mr-auto w-full border-none bg-transparent py-0.5 focus:outline-none"
        placeholder="留言..."
        @keyup.enter="postComment(props.post.id)"
      />
      <button
        type="button"
        class="mx-1 flex shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-800 to-slate-600 px-3 text-sm text-gray-300 transition-all duration-200 hover:bg-gradient-to-tr hover:from-slate-400 hover:to-blue-700"
        :disabled="isLoading"
        @click="postComment(props.post.id)"
      >
        <span>留言</span>
      </button>
    </label>
  </div>
</template>
<style></style>
