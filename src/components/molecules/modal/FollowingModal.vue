<script setup>
import { VueFinalModal, $vfm } from 'vue-final-modal';
import useUserStore from '@/stores/user';

const props = defineProps({
  following: {
    type: Array,
    required: true,
    default: () => [],
  },
});
const emit = defineEmits(['toggleFollow']);

const router = useRouter();

const userStore = useUserStore();

const redirect = (id) => {
  $vfm.hideAll();
  router.push(`/profile/${id}`);
};

const judgeFollowing = (id) => {
  const filter = props.following.filter((item) => item.user.id === id);
  return filter.length;
};
</script>
<template>
  <vue-final-modal
    v-slot="{ close }"
    :esc-to-close="true"
    v-bind="$attrs"
    classes="flex justify-center items-center text-gray-300"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border border-gray-800 rounded bg-black"
    :overlay-style="['background-color: rgba(91, 112, 131, 0.4)']"
  >
    <span class="mr-8 text-center text-xl font-bold">追蹤名單 </span>
    <DotLine class="my-3" />
    <div class="h-[280px] flex-grow overflow-y-auto">
      <div
        v-if="!following.length"
        class="flex h-full w-[300px] items-center justify-center text-sm"
      >
        尚未追蹤任何人
      </div>
      <template v-else>
        <div
          v-for="follow in following"
          :key="follow.id"
          class="mb-3 flex w-[300px] items-center"
        >
          <div class="mr-3 h-10 w-10 overflow-hidden rounded-full">
            <img :src="follow.user.photo" alt="avatar" />
          </div>
          <div
            class="cursor-pointer font-bold"
            @click="redirect(follow.user.id)"
          >
            {{ follow.user.name }}
          </div>

          <button
            v-if="judgeFollowing(follow.user.id)"
            type="button"
            class="cancel-btn ml-auto bg-red-900/50"
            @click="emit('toggleFollow', follow.user.id)"
          >
            <span>取消追蹤</span>
          </button>
          <button
            v-else
            type="button"
            class="confirm-btn ml-auto"
            :class="userStore.user.id === follow.user.id && 'hidden'"
            @click="emit('toggleFollow', follow.user.id)"
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
