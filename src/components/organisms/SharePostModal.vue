<script setup>
import { VueFinalModal, $vfm } from 'vue-final-modal';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['confirm']);

const isShowCancelModal = ref(false);

const confirm = () => {
  emit('confirm');
  $vfm.hideAll();
};
</script>
<template>
  <vue-final-modal
    v-slot="{ params, close }"
    :esc-to-close="true"
    v-bind="$attrs"
    classes="flex justify-center items-center text-gray-300"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-black"
    :overlay-style="['background-color: rgba(91, 112, 131, 0.4)']"
  >
    <span class="mr-8 text-center text-xl font-bold">
      <slot name="title"></slot>
    </span>
    <DotLine class="my-3" />
    <div class="h-auto flex-grow overflow-y-auto">
      <slot :params="params"></slot>
    </div>
    <div class="flex flex-shrink-0 items-center justify-end gap-x-5 pt-4">
      <button class="cancel-btn" @click="isShowCancelModal = true">
        <slot name="cancel"></slot>
      </button>
      <button class="confirm-btn" @click="confirm">
        <slot name="confirm"></slot>
      </button>
    </div>

    <button class="absolute top-0 right-0 mt-2 mr-2" @click="close">
      <mdi-close></mdi-close>
    </button>
  </vue-final-modal>
  <vue-final-modal
    v-model="isShowCancelModal"
    :esc-to-close="true"
    classes="flex justify-center items-center text-gray-300"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-black"
    :overlay-style="['background-color: rgba(91, 112, 131, 0.4)']"
  >
    <span class="mr-8 text-center text-xl font-bold">
      捨棄/取消 {{ props.title }}
    </span>
    <DotLine class="my-3" :error="true" />
    <div
      class="flex w-[300px] flex-grow flex-col items-center justify-center overflow-y-auto border-b border-gray-600 py-5 text-gray-400"
    >
      <p>確定要捨棄/取消 更新這篇貼文嗎?</p>
      <p class="text-sm">系統將不會儲存你的編輯內容</p>
    </div>
    <div class="flex flex-shrink-0 items-center justify-end gap-x-3 pt-4">
      <button
        class="flex cursor-pointer items-center justify-center rounded-md border border-gray-400 bg-slate-200/50 px-1 py-1 text-sm font-bold text-gray-300 shadow-md shadow-slate-200 transition-all duration-200 hover:bg-slate-200/60 hover:shadow-black sm:px-3 sm:py-2 sm:text-base"
        @click="isShowCancelModal = false"
      >
        取消
      </button>
      <button class="cancel-btn" @click="$vfm.hideAll()">確定取消</button>
    </div>

    <button
      class="absolute top-0 right-0 mt-2 mr-2"
      @click="isShowCancelModal = false"
    >
      <mdi-close class="text-red-800"></mdi-close>
    </button>
  </vue-final-modal>
</template>
<style></style>
