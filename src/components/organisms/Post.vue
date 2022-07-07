<script setup>
import useUserStore from '@/stores/user';
import useFollowStore from '@/stores/follow';

import { formatTime } from '@/methods/formatTime';
import { apiGetComments, apiPostComment, apiSharePost } from '@/api/api';
import useLike from '@/methods/useLike';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
const userStore = useUserStore();
const followStore = useFollowStore();

const { likes, getLikes, toggleLikes } = useLike();

const commentDom = ref();
const contentDom = ref();
const imgModal = ref();

const openComment = ref(false);
const comments = ref([]);
const content = ref('');
const isLoading = ref(false);
const isShowLikeModal = ref(false);
const isShowShareModal = ref(false);
const isTruncate = ref(false);
const isLike = computed(() => {
  const filter = likes.value.filter((item) => item._id === userStore.user.id);
  return filter.length;
});

const imagesClass = computed(() => {
  if (props.post.images.length === 1) {
    return 'grid-cols-1 grid-rows-1';
  }
  if (props.post.images.length === 2) {
    return 'grid-cols-2 ';
  }
  if (props.post.images.length === 3) {
    return 'grid-cols-2 grid-rows-2';
  }
  return 'grid-cols-2 ';
});

watchEffect(() => {
  comments.value = props.post.comments;
  likes.value = props.post.likes;
});

const calcLine = () => {
  const style = window.getComputedStyle(contentDom.value, null);

  const row = Math.ceil(
    Number(style.height.replace('px', '')) /
      Number(style.lineHeight.replace('px', ''))
  );

  if (row > 2) {
    isTruncate.value = true;
  }
};

const postComment = async (id) => {
  try {
    isLoading.value = true;
    await apiPostComment(id, { content: content.value });
    const res = await apiGetComments(id);
    comments.value = res.data.data;
    isLoading.value = false;
    openComment.value = true;
    content.value = '';
  } catch (error) {
    console.log(error);
  }
};
const judgeFollowing = (id) => {
  const filter = followStore.following.filter((item) => item.user._id === id);
  return filter.length;
};
const sharePost = async () => {
  await apiSharePost(props.post._id);
};

onMounted(async () => {
  try {
    await getLikes(props.post._id);
  } catch (error) {
    console.log(error);
  }

  nextTick(() => {
    calcLine();
  });
});
</script>
<template>
  <div class="mb-5 rounded-md bg-black px-5 py-3 text-gray-400">
    <div class="mb-5 flex border-b border-gray-700 pb-2">
      <div class="h-10 w-10 overflow-hidden rounded-full md:h-12 md:w-12">
        <img :src="post.user.photo" alt="avatar" />
      </div>
      <div class="ml-2">
        <router-link
          class="font-bold hover:text-blue-400 md:text-xl"
          :to="`/auth/posts/${props.post.user._id}`"
          >{{ props.post.user.name }}</router-link
        >
        <p class="text-sm text-gray-500">
          {{ formatTime(props.post.createdAt) }}
        </p>
      </div>
    </div>
    <div class="border-b border-gray-700 pb-2">
      <div
        ref="contentDom"
        class="relative mb-5"
        :class="isTruncate && 'line-clamp-2 '"
      >
        {{ props.post.content }}
        <button
          v-if="isTruncate"
          type="button"
          class="absolute right-0 bottom-0 cursor-pointer rounded-sm bg-black font-bold text-gray-600 hover:text-gray-300 hover:underline"
          @click="isTruncate = false"
        >
          ...顯示更多
        </button>
      </div>

      <div v-if="props.post.images.length" class="mb-5">
        <div class="grid h-[200px] md:h-[300px]" :class="imagesClass">
          <div
            v-for="(image, i) in props.post.images"
            :key="image"
            :style="{ backgroundImage: 'url(' + image + ')' }"
            class="h-full cursor-pointer border-2 bg-cover bg-center p-1"
            :class="
              props.post.images.length >= 3 ? 'odd:row-span-2' : 'odd:row-auto'
            "
            @click="imgModal.showImg(i)"
          ></div>
        </div>
      </div>
      <div class="mb-3 flex gap-2">
        <div v-if="!likes.length" class="flex items-center text-gray-500">
          <ri:heart-3-line class="mr-1" />
          <p>成為第一個喜歡的朋友</p>
        </div>
        <div
          v-else
          class="group flex cursor-pointer items-center text-gray-400"
          @click="isShowLikeModal = true"
        >
          <ri:heart-3-fill class="mr-1 text-red-600" />
          <p class="group-hover:text-blue-500">{{ likes.length }} 個人喜歡</p>
        </div>
        <div v-if="!comments.length" class="flex items-center text-gray-500">
          <ri:chat-1-line class="mr-1" />
          <p>尚無留言</p>
        </div>
        <div
          v-else
          class="group flex cursor-pointer items-center text-gray-400"
          @click="openComment = !openComment"
        >
          <ri:chat-1-fill class="mr-1 text-blue-500" />
          <p class="group-hover:text-blue-500">{{ comments.length }} 則留言</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 border-b border-gray-700">
      <div
        class="flex cursor-pointer items-center justify-center border-r border-gray-700 py-3 transition-all duration-200 hover:bg-red-500/30 hover:text-pink-300"
        :class="isLike && 'text-red-800'"
        @click="toggleLikes(props.post._id)"
      >
        <template v-if="isLike">
          <ri:heart-3-fill class="mr-1" />
        </template>
        <template v-else>
          <ri:heart-3-line class="mr-1" />
        </template>
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
        @click="isShowShareModal = true"
      >
        <ri:share-box-line class="mr-1" />
        分享
      </div>
    </div>
    <div v-if="openComment" class="my-3">
      <div v-for="comment in comments" :key="comment._id" class="mb-3 flex">
        <div class="mr-3 h-8 w-8 overflow-hidden rounded-full">
          <img :src="comment.commenter.photo" alt="avatar" />
        </div>
        <div class="rounded-lg bg-blue-900/50 px-3 py-2">
          <div class="flex justify-between">
            <h3 class="mr-3 font-bold">{{ comment.commenter.name }}</h3>
            <p class="text-sm text-gray-600">
              {{ formatTime(comment.createdAt) }}
            </p>
          </div>
          <p>{{ comment.content }}</p>
        </div>
      </div>
    </div>
    <div class="mt-3 flex items-center">
      <div class="mr-2 h-9 w-9 overflow-hidden rounded-full">
        <img :src="userStore.user.photo" alt="avatar" />
      </div>
      <label class="flex w-full rounded-full bg-blue-900/50 py-1">
        <div v-if="isLoading" class="ml-5 mt-1 flex shrink grow">
          <p>留言</p>
          <eos-icons:three-dots-loading class="text-2xl text-blue-300" />
        </div>
        <input
          v-else
          ref="commentDom"
          v-model.trim="content"
          type="text"
          class="ml-3 mr-auto shrink grow border-none bg-transparent py-0.5 focus:outline-none"
          placeholder="留言..."
          @keyup.enter="postComment(props.post._id)"
        />
        <button
          type="button"
          class="mx-1 flex shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-800 to-slate-600 px-3 text-sm text-gray-300 transition-all duration-200 hover:bg-gradient-to-tr hover:from-slate-400 hover:to-blue-700"
          :disabled="isLoading"
          @click="postComment(props.post._id)"
        >
          <span>留言</span>
        </button>
      </label>
    </div>
  </div>
  <Modal v-model="isShowLikeModal">
    <template #title>喜歡的用戶</template>
    <div
      v-if="!likes.length"
      class="flex h-full w-[300px] items-center justify-center text-sm"
    >
      還沒有任何人喜歡
    </div>
    <template v-else>
      <div
        v-for="item in likes"
        :key="item._id"
        class="mb-3 flex w-[300px] items-center"
      >
        <div class="mr-3 h-10 w-10 overflow-hidden rounded-full">
          <img :src="item.photo" alt="avatar" />
        </div>
        <router-link class="font-bold" :to="`/auth/posts/${item._id}`">{{
          item.name
        }}</router-link>
        <button
          v-if="judgeFollowing(item._id)"
          type="button"
          class="cancel-btn ml-auto bg-red-900/50"
          @click="followStore.toggleFollow(item._id)"
        >
          <span>取消追蹤</span>
        </button>
        <button
          v-else
          type="button"
          :class="
            userStore.user.id === item._id ? 'hidden' : 'confirm-btn ml-auto'
          "
          @click="followStore.toggleFollow(item._id)"
        >
          <span>追蹤</span>
        </button>
      </div>
    </template>
  </Modal>
  <SharePostModal
    v-model="isShowShareModal"
    :title="'分享貼文'"
    @confirm="sharePost"
  >
    <template #title>分享貼文</template>
    <div class="w-[300px] border-4 border-gray-600 p-5 md:w-[500px]">
      <div class="mb-5 flex border-b border-gray-700 pb-2">
        <div class="h-10 w-10 overflow-hidden rounded-full md:h-12 md:w-12">
          <img :src="post.user.photo" alt="avatar" />
        </div>
        <div class="ml-2">
          <router-link
            class="font-bold hover:text-blue-400 md:text-xl"
            :to="`/auth/posts/${props.post.user._id}`"
            >{{ props.post.user.name }}</router-link
          >
          <p class="text-sm text-gray-500">
            {{ formatTime(props.post.createdAt) }}
          </p>
        </div>
      </div>
      <div class="border-b border-gray-700 pb-2">
        <div class="mb-5">
          {{ props.post.content }}
        </div>
        <div v-if="props.post.images.length" class="mb-5">
          <div class="grid h-[200px] md:h-[300px]" :class="imagesClass">
            <div
              v-for="(image, i) in props.post.images"
              :key="image"
              :style="{ backgroundImage: 'url(' + image + ')' }"
              class="h-full cursor-pointer border-2 bg-cover bg-center p-1"
              :class="
                props.post.images.length >= 3
                  ? 'odd:row-span-2'
                  : 'odd:row-auto'
              "
              @click="imgModal.showImg(i)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <template #cancel>取消貼文</template>
    <template #confirm>分享貼文</template>
  </SharePostModal>
  <ImageModal
    v-if="props.post.images.length"
    ref="imgModal"
    :images="props.post.images"
  />
</template>
<style></style>
