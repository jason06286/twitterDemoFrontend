<script setup>
import { VueFinalModal, $vfm } from 'vue-final-modal';

import { apiResetPassword } from '@/api/api';
import { useForm, useField } from 'vee-validate';
import { resetPasswordSchema } from '@/methods/validate';

const isLoading = ref(false);
const isLook = ref(false);
const isShowCancelModal = ref(false);
const errorMessage = ref('');
const { errors, handleSubmit, resetForm } = useForm({
  validationSchema: resetPasswordSchema,
});
const { value: checked } = useField('checked');
const { value: password } = useField('password');
const reStart = () => {
  resetForm();
  errorMessage.value = '';
  $vfm.hideAll();
};
const onSubmit = handleSubmit(async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const res = await apiResetPassword({
      password: password.value,
    });
    resetForm();
    $vfm.hideAll();
    console.log('res :>> ', res);
  } catch (error) {
    errorMessage.value = error.response.data.message;
  }
  isLoading.value = false;
});
</script>
<template>
  <vue-final-modal
    :esc-to-close="true"
    v-bind="$attrs"
    classes="flex justify-center items-center text-gray-300"
    content-class="relative flex flex-col max-h-full mx-4 p-4 border dark:border-gray-800 rounded bg-white dark:bg-black"
    :overlay-style="['background-color: rgba(91, 112, 131, 0.4)']"
  >
    <span class="mr-8 text-center text-xl font-bold"> 重設密碼 </span>
    <DotLine class="my-3" />
    <div class="h-[280px] w-[300px] flex-grow py-5 sm:w-[400px]">
      <form @submit="onSubmit">
        <div class="mb-6">
          <label
            class="relative flex w-full rounded border p-2"
            :class="
              errors.password
                ? 'border-red-700 text-red-700'
                : 'border-gray-400 text-gray-400'
            "
            for="password"
          >
            <input
              id="password"
              v-model="password"
              name="password"
              :type="isLook ? 'text' : 'password'"
              placeholder="密碼"
              class="peer order-2 w-full border-none bg-transparent placeholder-transparent focus:outline-none"
            />
            <span class="flex-order order-1 m-1 mb-0">
              <ri:lock-password-line />
            </span>
            <span
              class="absolute left-3 bg-[#181818] font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:translate-y-0 peer-focus:text-xs"
              :class="password && '-top-2 translate-y-0 text-xs'"
              >密碼</span
            >
            <span
              v-if="!isLook"
              class="order-3 m-1 mb-0 cursor-pointer opacity-0 transition-all duration-150 peer-focus:opacity-80"
              :class="password && 'opacity-80'"
              @click="isLook = true"
            >
              <ri:eye-close-line />
            </span>
            <span
              v-else
              class="order-3 m-1 mb-0 cursor-pointer opacity-0 transition-all duration-150 peer-focus:opacity-80"
              :class="password && 'opacity-80'"
              @click="isLook = false"
            >
              <ri:eye-line />
            </span>
          </label>
          <p class="mt-2 text-sm text-red-800">{{ errors.password }}</p>
        </div>
        <div class="mb-6">
          <label
            class="relative flex w-full rounded border p-2"
            :class="
              errors.checked
                ? 'border-red-700 text-red-700'
                : 'border-gray-400 text-gray-400'
            "
            for="checked"
          >
            <input
              id="checked"
              v-model="checked"
              name="checked"
              :type="isLook ? 'text' : 'password'"
              placeholder="確認密碼"
              class="peer order-2 w-full border-none bg-transparent placeholder-transparent focus:outline-none"
            />
            <span class="flex-order order-1 m-1 mb-0">
              <ri:lock-password-line />
            </span>
            <span
              class="absolute left-3 bg-[#181818] font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:translate-y-0 peer-focus:text-xs"
              :class="checked && '-top-2 translate-y-0 text-xs'"
              >確認密碼</span
            >
            <span
              v-if="!isLook"
              class="order-3 m-1 mb-0 cursor-pointer opacity-0 transition-all duration-150 peer-focus:opacity-80"
              :class="checked && 'opacity-80'"
              @click="isLook = true"
            >
              <ri:eye-close-line />
            </span>
            <span
              v-else
              class="order-3 m-1 mb-0 cursor-pointer opacity-0 transition-all duration-150 peer-focus:opacity-80"
              :class="checked && 'opacity-80'"
              @click="isLook = false"
            >
              <ri:eye-line />
            </span>
          </label>
          <p class="mt-2 text-sm text-red-800">{{ errors.checked }}</p>
        </div>
        <div class="group relative">
          <div
            class="- absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 blur transition-all duration-300 group-hover:opacity-80"
            :class="isLoading && 'animate-pulse '"
          ></div>
          <button
            type="submit"
            class="relative flex w-full cursor-pointer justify-center rounded-full border border-gray-400 bg-[#181818] py-2 text-blue-500 transition-all duration-300 group-hover:text-gray-300"
            :disabled="isLoading"
          >
            <eos-icons:three-dots-loading v-if="isLoading" class="text-2xl" />
            <span v-else> 重設密碼 </span>
          </button>
        </div>
      </form>
    </div>

    <button
      class="absolute top-0 right-0 mt-2 mr-2"
      @click="isShowCancelModal = true"
    >
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
    <span class="mr-8 text-center text-xl font-bold"> 捨棄/取消 重設密碼 </span>
    <DotLine class="my-3" :error="true" />
    <div
      class="flex w-[300px] flex-grow flex-col items-center justify-center overflow-y-auto border-b border-gray-600 py-5 text-gray-400"
    >
      <p>確定要捨棄/取消 重設密碼嗎?</p>
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
