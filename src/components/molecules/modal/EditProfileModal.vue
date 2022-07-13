<script setup>
import { useToast } from 'vue-toastification';
import { VueFinalModal, $vfm } from 'vue-final-modal';

import useImage from '@/methods/useImage';
import useUserStore from '@/stores/user';

import { apiEditProfile } from '@/api/api';

const emit = defineEmits(['init']);

const toast = useToast();
const userStore = useUserStore();

const { uploadImg, uploadFile } = useImage();

const cropCoverImage = ref();
const cropAvatar = ref();

const errorMessage = ref('');
const name = ref('');
const description = ref('');
const coverImage = ref('');
const photo = ref('');

const isDisabled = ref(false);
const isShowCancelModal = ref(false);
const isLoading = ref(false);
const isCoverImageActive = ref(false);
const isAvatarActive = ref(false);

const editCoverImage = async (e) => {
  isLoading.value = true;
  try {
    const res = await uploadFile(e.target);
    coverImage.value = res.data.data.imgUrl;
    isCoverImageActive.value = true;
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
};
const editAvatar = async (e) => {
  isLoading.value = true;
  try {
    const res = await uploadFile(e.target);
    photo.value = res.data.data.imgUrl;
    isAvatarActive.value = true;
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
};
const cropedCoverImage = () => {
  cropCoverImage.value.preview();
};
const cropedAvatar = () => {
  cropAvatar.value.preview();
};
const confirmCropedCoverImage = async (data) => {
  isLoading.value = true;
  try {
    const res = await uploadImg(data);
    coverImage.value = res.data.data.imgUrl;
    isCoverImageActive.value = false;
  } catch (error) {
    console.error(error);
  }
  isLoading.value = false;
};
const confirmCropedAvatar = async (data) => {
  isLoading.value = true;
  try {
    const res = await uploadImg(data);
    photo.value = res.data.data.imgUrl;
    isAvatarActive.value = false;
  } catch (error) {
    console.error(error);
  }
  isLoading.value = false;
};

const cancelEdit = () => {
  isAvatarActive.value = false;
  isCoverImageActive.value = false;
};

watch(name, () => {
  if (!name.value) {
    errorMessage.value = '暱稱不得為空';
    isDisabled.value = true;
  } else {
    errorMessage.value = '';
    isDisabled.value = false;
  }
});

const reStart = () => {
  name.value = userStore.user.name;
  description.value = userStore.user.description;
  coverImage.value = userStore.user.coverImage;
  photo.value = userStore.user.photo;
  errorMessage.value = '';
  isCoverImageActive.value = false;
  isAvatarActive.value = false;
  $vfm.hideAll();
};

const confirmEditProfile = async () => {
  try {
    await apiEditProfile({
      name: name.value,
      photo: photo.value,
      coverImage: coverImage.value,
      description: description.value,
    });
    await userStore.setUser(userStore.user.id);
    reStart();
    emit('init');
    toast.success('修改個人資料成功!');
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  reStart();
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
    <div class="flex w-full items-center p-3 text-sm sm:text-xl">
      <button
        v-if="!isAvatarActive & !isCoverImageActive"
        @click="isShowCancelModal = true"
      >
        <ic:round-close />
      </button>
      <button
        v-if="isAvatarActive || isCoverImageActive"
        type="button"
        @click="cancelEdit"
      >
        <mdi:arrow-left />
      </button>
      <h2 class="ml-8 font-bold">編輯個人資料</h2>

      <p class="ml-auto text-red-600">{{ errorMessage }}</p>
      <button
        v-if="!isCoverImageActive && !isAvatarActive"
        type="button"
        class="confirm-btn ml-auto bg-blue-900/50"
        :disabled="isDisabled"
        @click="confirmEditProfile"
      >
        儲存
      </button>
      <button
        v-if="isCoverImageActive"
        type="button"
        class="confirm-btn ml-auto bg-blue-900/50"
        :disabled="isLoading"
        @click="cropedCoverImage"
      >
        截圖
      </button>
      <button
        v-if="isAvatarActive"
        type="button"
        class="confirm-btn ml-auto bg-blue-900/50"
        :disabled="isLoading"
        @click="cropedAvatar"
      >
        截圖
      </button>
    </div>
    <div class="relative mb-5 w-[300px] overflow-hidden sm:w-[500px]">
      <div
        v-if="isLoading"
        class="absolute inset-0 z-20 flex items-center justify-center bg-black/80"
      >
        <mdi:loading class="animate-spin text-6xl" />
      </div>
      <div
        class="flex h-[120px] w-full items-center justify-center gap-x-5 bg-gray-400 bg-cover bg-center sm:h-[200px]"
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
        class="absolute inset-0 z-10 w-[300px] transition-all duration-200 sm:w-[500px]"
        :class="isCoverImageActive ? 'translate-x-0' : 'translate-x-full'"
      >
        <Cropper
          ref="cropCoverImage"
          :image="coverImage"
          :fixed-number="[16, 9]"
          @confirm-croped-cover-image="confirmCropedCoverImage"
        />
      </div>
      <div
        class="absolute inset-0 z-10 w-[300px] transition-all duration-200 sm:w-[500px]"
        :class="isAvatarActive ? 'translate-x-0' : 'translate-x-full'"
      >
        <Cropper
          ref="cropAvatar"
          :image="photo"
          :fixed-number="[1, 1]"
          @confirm-croped-cover-image="confirmCropedAvatar"
        />
      </div>
      <div class="p-5">
        <div
          class="-mt-20 flex h-20 w-20 items-center justify-center rounded-full border-4 border-black bg-blue-300 bg-cover bg-center sm:h-32 sm:w-32"
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
            @change="editAvatar($event)"
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
