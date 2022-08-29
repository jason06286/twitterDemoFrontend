<script setup>
import { VueFinalModal, $vfm } from 'vue-final-modal';
import useUserStore from '@/stores/user';

import useImage from '@/methods/useImage';
import { apiAddPost } from '@/api/api';

const emit = defineEmits(['publish']);

const userStore = useUserStore();

const { images, errorMsg, uploadFile, deleteImage } = useImage();

const isShowCancelModal = ref(false);
const isLoading = ref(false);
const content = ref('');

const doUploadFile = async (e) => {
  errorMsg.value = '';
  isLoading.value = true;
  try {
    const res = await uploadFile(e.target);
    images.value.push(res.data.data.imgUrl);
  } catch (error) {
    console.error(error);
  }
  isLoading.value = false;
};
const reStart = () => {
  content.value = '';
  images.value.length = 0;
  isLoading.value = false;
  errorMsg.value = '';
  $vfm.hideAll();
};
const publishPost = async () => {
  errorMsg.value = '';
  if (content.value === '' && !images.value.length) {
    return (errorMsg.value = '請輸入貼文內容或上傳一張圖片');
  }
  try {
    await apiAddPost({
      content: content.value,
      images: images.value,
    });
    emit('publish');
    reStart();
    $vfm.hideAll();
  } catch (error) {
    console.error(error);
  }
};

onUnmounted(() => {
  content.value = '';
  images.value.length = 0;
  isLoading.value = false;
  errorMsg.value = '';
});
</script>
<template>
  <vue-final-modal
    :click-to-close="false"
    v-bind="$attrs"
    name="123"
    classes="flex justify-center items-center text-gray-300 rounded-lg"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border border-gray-800 rounded-md  bg-black"
    :overlay-style="['background-color: rgba(91, 112, 131, 0.4)']"
  >
    <button class="mb-3" @click="isShowCancelModal = true">
      <mdi:close-circle class="cursor-pointer text-xl hover:text-red-400" />
    </button>
    <div class="flex w-[300px] p-1 sm:w-[500px]">
      <div class="mr-2 h-12 w-12 shrink-0 overflow-hidden rounded-full">
        <img :src="userStore.user.photo" alt="avator" />
      </div>
      <div class="w-full">
        <textarea
          v-model="content"
          placeholder="What's happening?"
          class="h-[120px] w-full bg-transparent p-3 focus:outline-none sm:h-[200px]"
        ></textarea>

        <div
          v-if="images.length"
          class="h-[200px] flex-grow overflow-y-auto sm:h-[400px]"
        >
          <div
            class="grid h-full"
            :class="images.length > 1 && 'grid-cols-2 gap-2'"
          >
            <div
              v-for="(image, index) in images"
              :key="image"
              class="h-[150px] cursor-pointer rounded-2xl bg-cover bg-center p-1 sm:h-[300px]"
              :style="{ backgroundImage: 'url(' + image + ')' }"
            >
              <button
                type="button"
                class="rounded-full bg-gray-500"
                @click="deleteImage(index)"
              >
                <mdi:close-circle
                  class="cursor-pointer text-xl hover:text-red-400"
                />
              </button>
            </div>
          </div>
        </div>
        <div
          class="mt-3 flex flex-shrink-0 items-end justify-between border-t pt-3"
        >
          <mdi:loading
            v-if="isLoading"
            class="animate-spin text-xl text-cyan-600"
          />
          <label v-else for="file" class="group cursor-pointer">
            <mdi:picture
              class="text-xl"
              :class="
                images.length >= 4
                  ? 'text-gray-400 group-hover:text-gray-400'
                  : 'text-cyan-600 group-hover:text-cyan-500'
              "
            />
          </label>
          <input
            id="file"
            :disabled="images.length >= 4"
            type="file"
            accept="image/png, image/jpeg"
            class="hidden"
            @change="doUploadFile($event)"
          />
          <p class="ml-3 text-sm text-red-800 xl:text-base">{{ errorMsg }}</p>
          <button
            class="confirm-btn flex-shrink-0 disabled:bg-gray-400"
            :disabled="isLoading"
            @click="publishPost"
          >
            發布貼文
          </button>
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
    <span class="mr-8 text-center text-xl font-bold"> 捨棄/取消 新增貼文 </span>
    <DotLine class="my-3" :error="true" />
    <div
      class="flex w-[300px] flex-grow flex-col items-center justify-center overflow-y-auto border-b border-gray-600 py-5 text-gray-400"
    >
      <p>確定要捨棄/取消 新增這篇貼文嗎?</p>
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
