<script setup>
import { useToast } from 'vue-toastification';

import useUserStore from '@/stores/user';
import useFollowStore from '@/stores/follow';

import { formatTime, formatContent } from '@/methods/format';
import useLike from '@/methods/useLike';

import { apiSharePost, apiDeletePost } from '@/api/api';

const props = defineProps({
  isAdmin: {
    type: Boolean,
    required: true,
  },
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['init', 'showEditPostModal']);

const toast = useToast();

const userStore = useUserStore();
const followStore = useFollowStore();

const route = useRoute();
const router = useRouter();

const { likes, getLikes, toggleLikes } = useLike();

const imgModal = ref();
const comment = ref();
const contentDom = ref();

const isTruncate = ref(false);
const droupActive = ref(false);

const isShowLikeModal = ref(false);
const isShowShareModal = ref(false);
const isShowDeletePostModal = ref(false);

const truncatePosition = ref('');

const isLike = computed(() => {
  const filter = likes.value.filter((item) => item.id === userStore.user.id);
  return filter.length;
});

const imagesClass = computed(() => {
  let images;
  if (props.post.share) {
    images = props.post.share.images;
  } else [(images = props.post.images)];
  if (images.length === 1) {
    return 'grid-cols-1 grid-rows-1';
  }
  if (images.length === 2) {
    return 'grid-cols-2 ';
  }
  if (images.length === 3) {
    return 'grid-cols-2 grid-rows-2';
  }
  return 'grid-cols-2 ';
});

const droupHeight = computed(() => {
  if (droupActive.value & (props.post.share === undefined)) {
    return 'h-[84px]';
  }
  if (droupActive.value & (props.post.share !== undefined)) {
    return 'h-[42px]';
  }
  return 'h-0';
});

const calcLine = () => {
  if (!contentDom.value) return;
  const style = window.getComputedStyle(contentDom.value, null);

  const row = Math.ceil(
    Number(style.height.replace('px', '')) /
      Number(style.lineHeight.replace('px', ''))
  );
  if (row > 2) {
    isTruncate.value = true;
  }
};

const calcWidth = () => {
  if (!contentDom.value) return;
  if (!isTruncate.value) return;
  const content =
    props.post.share === undefined
      ? props.post.content
      : props.post.share.content;
  const style = window.getComputedStyle(contentDom.value, null);
  const fontSize = Number(style['font-size'].replace('px', ''));
  const maxWidth = Number(style.width.replace('px', ''));
  const row = content.split('\n');
  const contentLength = row.length >= 3 ? row[1].length : 10000;
  const position = fontSize * Number(contentLength);

  truncatePosition.value =
    fontSize * Number(contentLength) >= maxWidth
      ? `right:0px`
      : `left:${position}px`;
};
watchEffect(() => {
  likes.value = props.post.likes;
  calcWidth();
});
const redirectLink = (url) => {
  router.push(url);
};
const judgeFollowing = (id) => {
  const filter = followStore.following.filter((item) => item.user.id === id);
  return filter.length;
};

const sharePost = async () => {
  await apiSharePost(props.post.id);
  emit('init');
  toast.success('分享貼文成功!');
  if (route.path === '/') {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo({
      top: 500,
      left: 0,
      behavior: 'smooth',
    });
  }
};
const deletePost = async () => {
  await apiDeletePost(props.post.id);
  emit('init');
};
const showEditPostModal = () => {
  droupActive.value = !droupActive.value;
  emit('showEditPostModal', props.post.id);
};

const showDeletePostModal = () => {
  droupActive.value = !droupActive.value;
  isShowDeletePostModal.value = true;
};

onMounted(async () => {
  try {
    likes.value.length = 0;
    await getLikes(props.post.id);
  } catch (error) {
    console.error(error);
  }
  nextTick(() => {
    calcLine();
  });
  window.addEventListener('resize', calcWidth);
});
onUnmounted(() => {
  window.removeEventListener('resize', calcWidth);
});
</script>
<template>
  <div class="mb-5 rounded-md bg-black px-5 py-3 text-gray-400">
    <div class="mb-5 flex border-b border-gray-700 pb-2">
      <div
        v-if="props.post.share"
        class="ml-3 flex items-center gap-3 self-end text-base font-bold text-gray-400 lg:text-xl"
      >
        <ic:round-share class="mr-2" />
        <div class="h-10 w-10 overflow-hidden rounded-full">
          <img :src="props.post.user.photo" alt="avatar" />
        </div>
        <div>
          {{ props.post.user.name }}
          <span class="text-base font-normal text-gray-300/80">share</span>
          <p class="text-sm text-gray-500">
            {{ formatTime(props.post.createdAt) }}
          </p>
        </div>
      </div>
      <div v-else class="flex">
        <div class="h-10 w-10 overflow-hidden rounded-full md:h-12 md:w-12">
          <img :src="post.user.photo" alt="avatar" />
        </div>
        <div class="ml-2">
          <div
            class="cursor-pointer font-bold hover:text-blue-400 md:text-xl"
            @click="redirectLink(`/profile/${props.post.user.id}`)"
          >
            {{ props.post.user.name }}
          </div>
          <p class="text-sm text-gray-500">
            {{ formatTime(props.post.createdAt) }}
          </p>
        </div>
      </div>
      <div class="relative ml-auto">
        <button
          v-if="props.isAdmin"
          type="button"
          class="px-2 py-2 hover:text-blue-300"
          @click="droupActive = !droupActive"
        >
          <bi:three-dots-vertical />
        </button>
        <ul
          class="absolute bottom-0 right-0 z-10 w-36 translate-y-full overflow-hidden bg-black shadow-md shadow-slate-600 transition-all duration-500"
          :class="droupHeight"
        >
          <li
            v-if="!props.post.share"
            class="flex cursor-pointer items-center border-b border-gray-500 px-3 py-2 hover:bg-blue-800 hover:text-blue-300"
            @click="showEditPostModal"
          >
            <ic:round-edit class="mr-2" /> 編輯貼文
          </li>
          <li
            class="flex cursor-pointer items-center px-3 py-2 hover:bg-red-800 hover:text-red-300"
            @click="showDeletePostModal"
          >
            <ic:round-delete class="mr-2" /> 刪除貼文
          </li>
        </ul>
        <div
          v-if="droupActive"
          class="fixed inset-0 -z-0 h-full w-full bg-transparent"
          @click.prevent="droupActive = false"
        ></div>
      </div>
    </div>
    <div class="border-b border-gray-700 pb-2">
      <div v-if="props.post.share" class="my-3 border-2 p-5">
        <div class="mb-5 flex border-b border-gray-700 pb-2">
          <div class="h-8 w-8 overflow-hidden rounded-full">
            <img :src="props.post.share.user.photo" alt="avatar" />
          </div>
          <div class="ml-2">
            <div
              class="cursor-pointer font-bold hover:text-blue-400"
              @click="redirectLink(`/profile/${props.post.share.user.id}`)"
            >
              {{ props.post.share.user.name }}
            </div>
            <p class="text-sm text-gray-500">
              {{ formatTime(props.post.share.createdAt) }}
            </p>
          </div>
        </div>
        <div
          ref="contentDom"
          class="relative mb-5"
          :class="isTruncate && 'line-clamp-2 '"
        >
          <template v-if="props?.post?.share?.content">
            <div
              class="mb-5"
              v-html="formatContent(props.post.share.content)"
            ></div>
          </template>
          <button
            v-if="isTruncate"
            type="button"
            class="absolute bottom-0 cursor-pointer rounded-sm bg-black font-bold text-gray-600 hover:text-gray-300 hover:underline"
            :style="truncatePosition"
            @click="isTruncate = false"
          >
            ...顯示更多
          </button>
        </div>

        <div v-if="props.post.share.images.length" class="mb-5">
          <div class="grid h-[200px] md:h-[300px]" :class="imagesClass">
            <div
              v-for="(image, i) in props.post.share.images"
              :key="image"
              :style="{ backgroundImage: 'url(' + image + ')' }"
              class="h-full cursor-pointer border-2 bg-cover bg-center p-1"
              :class="
                props.post.share.images.length >= 3
                  ? 'odd:row-span-2'
                  : 'odd:row-auto'
              "
              @click="imgModal.showImg(i)"
            ></div>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          ref="contentDom"
          class="relative mb-5"
          :class="isTruncate && 'line-clamp-2 '"
        >
          <template v-if="props?.post?.content">
            <div v-html="formatContent(props.post.content)"></div>
          </template>

          <button
            v-if="isTruncate"
            type="button"
            class="absolute bottom-0 cursor-pointer rounded-sm bg-black font-bold text-gray-600 hover:text-gray-300 hover:underline"
            :style="truncatePosition"
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
                props.post.images.length >= 3
                  ? 'odd:row-span-2'
                  : 'odd:row-auto'
              "
              @click="imgModal.showImg(i)"
            ></div>
          </div>
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
        <div
          v-if="!comment?.comments?.length"
          class="flex items-center text-gray-500"
        >
          <ri:chat-1-line class="mr-1" />
          <p>尚無留言</p>
        </div>
        <div
          v-else
          class="group flex cursor-pointer items-center text-gray-400"
          @click="comment?.openComment"
        >
          <ri:chat-1-fill class="mr-1 text-blue-500" />
          <p class="group-hover:text-blue-500">
            {{ comment?.comments?.length }} 則留言
          </p>
        </div>
      </div>
    </div>
    <div
      class="grid border-b border-gray-700"
      :class="!props.post.share ? 'grid-cols-3' : 'grid-cols-2'"
    >
      <div
        class="flex cursor-pointer items-center justify-center border-r border-gray-700 py-3 transition-all duration-200 hover:bg-red-500/30 hover:text-pink-300"
        :class="isLike && 'text-red-800'"
        @click="toggleLikes(props.post.id)"
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
        @click="comment?.focusComment"
      >
        <ri:chat-1-line class="mr-1" />
        留言
      </div>
      <div
        v-if="!props.post.share"
        class="flex cursor-pointer items-center justify-center py-3 transition-all duration-200 hover:bg-green-500/30 hover:text-green-300"
        @click="isShowShareModal = true"
      >
        <ri:share-box-line class="mr-1" />
        分享
      </div>
    </div>
    <Comment ref="comment" :post="props.post" />
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
        :key="item.id"
        class="mb-3 flex w-[300px] items-center"
      >
        <div class="mr-3 h-10 w-10 overflow-hidden rounded-full">
          <img :src="item.photo" alt="avatar" />
        </div>
        <div
          class="cursor-pointer font-bold"
          @click="redirectLink(`/profile/${item.id}`)"
        >
          {{ item.name }}
        </div>
        <button
          v-if="judgeFollowing(item.id)"
          type="button"
          class="cancel-btn ml-auto bg-red-900/50"
          @click="followStore.toggleFollow(item.id)"
        >
          <span>取消追蹤</span>
        </button>
        <button
          v-else
          type="button"
          :class="
            userStore.user.id === item.id ? 'hidden' : 'confirm-btn ml-auto'
          "
          @click="followStore.toggleFollow(item.id)"
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
          <div
            class="cursor-pointer font-bold hover:text-blue-400 md:text-xl"
            @click="redirectLink(`/profile/${props.post.user.id}`)"
          >
            {{ props.post.user.name }}
          </div>
          <p class="text-sm text-gray-500">
            {{ formatTime(props.post.createdAt) }}
          </p>
        </div>
      </div>
      <div class="border-b border-gray-700 pb-2">
        <template v-if="props?.post?.content">
          <div class="mb-5" v-html="formatContent(props.post.content)"></div>
        </template>
        <div v-if="props.post?.images?.length" class="mb-5">
          <div class="grid h-[200px] md:h-[300px]" :class="imagesClass">
            <div
              v-for="(image, i) in props.post.images"
              :key="image"
              :style="{ backgroundImage: 'url(' + image + ')' }"
              class="h-full cursor-pointer border-2 bg-cover bg-center p-1"
              :class="
                props.post?.images?.length >= 3
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
  <DeletePostModal v-model="isShowDeletePostModal" @confirm="deletePost" />
  <template v-if="props.post.share">
    <ImageModal
      v-if="props.post?.share?.images?.length"
      ref="imgModal"
      :images="props.post.share.images"
    />
  </template>
  <template v-else>
    <ImageModal
      v-if="props?.post?.images?.length"
      ref="imgModal"
      :images="props.post.images"
    />
  </template>
</template>
<style></style>
