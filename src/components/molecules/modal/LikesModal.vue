<script setup>
import { VueFinalModal } from 'vue-final-modal';

import useUserStore from '@/stores/user';
import useFollowStore from '@/stores/follow';

import useLike from '@/methods/useLike';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
const likes = ref([]);
const { getLikes } = useLike();

watchEffect(async () => {
  const res = await getLikes(props.post.id);
  likes.value = res;
});

const userStore = useUserStore();
const followStore = useFollowStore();

const judgeFollowing = (id) => {
  const filter = followStore.following.filter((item) => item.user.id === id);
  return filter.length;
};
</script>
<template>
  <vue-final-modal
    v-slot="{ close }"
    :esc-to-close="true"
    v-bind="$attrs"
    :name="props.post.id"
    classes="flex justify-center items-center text-gray-300"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border border-gray-800 rounded bg-black"
    :overlay-style="['background-color: rgba(91, 112, 131, 0.4)']"
  >
    <span class="mr-8 text-center text-xl font-bold"> 喜歡的用戶 </span>
    <DotLine class="my-3" />
    <div class="h-[280px] flex-grow overflow-y-auto">
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
    </div>

    <button class="absolute top-0 right-0 mt-2 mr-2" @click="close">
      <mdi-close></mdi-close>
    </button>
  </vue-final-modal>
</template>
<style></style>
