<script setup>
import { VueFinalModal, $vfm } from 'vue-final-modal';
import useImage from '@/methods/useImage';
import useUserStore from '@/stores/user';

import { apiEditProfile, apiGetProfile } from '@/api/api';

const userStore = useUserStore();

const isShowCancelModal = ref(false);
const errorMessage = ref('');
const isLoading = ref(false);
const name = ref('');
const description = ref('');
const coverImage = ref('');
const photo = ref('');
const isCoverImageActive = ref(false);

const { uploadFile } = useImage();

const editCoverImage = async (e) => {
  isLoading.value = true;
  try {
    const res = await uploadFile(e.target);
    coverImage.value = res.data.data.imgUrl;
  } catch (error) {
    console.log(error);
  }

  isLoading.value = false;
};

const reStart = () => {
  name.value = userStore.user.name;
  description.value = userStore.user.description;
  coverImage.value = userStore.user.coverImage;
  photo.value = userStore.user.photo;
  errorMessage.value = '';
  $vfm.hideAll();
};

onMounted(async () => {
  name.value = userStore.user.name;
  description.value = userStore.user.description;
  coverImage.value = userStore.user.coverImage;
  photo.value = userStore.user.photo;
  try {
    console.log('res :>> ', res);
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <vue-final-modal
    :click-to-close="false"
    v-bind="$attrs"
    classes="flex justify-center items-center text-gray-300"
    content-class="relative flex flex-col max-h-full mx-4  border dark:border-gray-800 rounded bg-white dark:bg-black"
    :overlay-style="['background-color: rgba(91, 112, 131, 0.4)']"
  >
    <div class="flex w-full items-center p-3 text-xl">
      <button @click="isShowCancelModal = true">
        <ic:round-close />
      </button>
      <h2 class="ml-8 font-bold">編輯個人資料</h2>
      <button type="button" class="confirm-btn ml-auto bg-blue-900/50">
        儲存
      </button>
    </div>
    <div class="relative mb-5 w-[500px] overflow-hidden">
      <div
        v-if="isLoading"
        class="absolute inset-0 z-10 flex items-center justify-center bg-black/80"
      >
        <mdi:loading class="animate-spin text-6xl" />
      </div>
      <div
        class="flex h-[200px] w-full items-center justify-center gap-x-5 bg-gray-400 bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + coverImage + ')' }"
      >
        <div>
          <label
            for="coverImg"
            class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 transition-all duration-200 hover:bg-black/30"
          >
            <ic:outline-camera-alt />
          </label>
          <input
            id="coverImg"
            ref="coverImageDom"
            type="file"
            class="hidden"
            accept="image/png, image/jpeg"
            @change="editCoverImage($event)"
          />
        </div>
        <button
          type="button"
          class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 transition-all duration-200 hover:bg-black/30"
          @click="coverImage = ''"
        >
          <ic:round-close />
        </button>
      </div>
      <div
        class="absolute inset-0 z-10 w-[500px] bg-blue-500 transition-all duration-200"
        :class="isCoverImageActive ? 'translate-x-0' : 'translate-x-full'"
      ></div>
      <div class="p-5">
        <div
          class="-mt-20 flex h-32 w-32 items-center justify-center rounded-full border-4 border-black bg-blue-300 bg-cover bg-center"
          :style="{ backgroundImage: 'url(' + photo + ')' }"
        >
          <label
            for="avatar"
            class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 transition-all duration-200 hover:bg-black/30"
          >
            <ic:outline-camera-alt />
          </label>
          <input
            id="avatar"
            type="file"
            class="hidden"
            accept="image/png, image/jpeg"
          />
        </div>
        <div class="mt-5">
          <label class="relative flex w-full">
            <span class="absolute -top-3 left-3 bg-black font-bold">暱稱</span>
            <input
              v-model="name"
              type="text"
              class="w-full border border-gray-400 bg-transparent p-3 focus:border-blue-400 focus:outline-none"
            />
          </label>
        </div>
        <div class="mt-5">
          <label class="relative flex w-full">
            <span class="absolute -top-3 left-3 bg-black font-bold">關於</span>
            <textarea
              v-model="description"
              class="w-full border border-gray-400 bg-transparent p-3 focus:border-blue-400 focus:outline-none"
              placeholder="介紹自己"
            ></textarea>
          </label>
        </div>
      </div>
    </div>
  </vue-final-modal>
  <vue-final-modal
    v-model="isShowCancelModal"
    :esc-to-close="true"
    classes="flex justify-center items-center text-gray-300"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-black"
    :overlay-style="['background-color: rgba(91, 112, 131, 0.4)']"
  >
    <span class="mr-8 text-center text-xl font-bold">
      捨棄/取消 編輯個人資料
    </span>
    <DotLine class="my-3" :error="true" />
    <div
      class="flex w-[300px] flex-grow flex-col items-center justify-center overflow-y-auto border-b border-gray-600 py-5 text-gray-400"
    >
      <p>確定要捨棄/取消 編輯個人資料嗎?</p>
      <p class="text-sm">系統將不會儲存你的編輯內容</p>
    </div>
    <div class="flex flex-shrink-0 items-center justify-end gap-x-5 pt-4">
      <button
        class="flex cursor-pointer items-center justify-center rounded-md border border-gray-400 bg-slate-200/50 px-1 py-1 text-sm font-bold text-gray-300 shadow-md shadow-slate-200 transition-all duration-200 hover:bg-slate-200/60 hover:shadow-black sm:px-3 sm:py-2 sm:text-base"
        @click="isShowCancelModal = false"
      >
        取消
      </button>
      <button class="cancel-btn" @click="reStart">確定取消</button>
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
