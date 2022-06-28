<script setup>
import { useForm, useField } from 'vee-validate';
import { loginSchema } from '@/methods/validate';

const errorMessage = ref('');

const { errors, handleSubmit } = useForm({
  validationSchema: loginSchema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');
const isLook = ref(false);
const onSubmit = handleSubmit(() => {
  errorMessage.value = '此帳號已註冊過';
  console.log('errors :>> ', errors.value);
  console.log('123');
});
</script>

<template>
  <div class="container m-auto flex h-screen items-center justify-center">
    <div
      class="flex h-[600px] w-full overflow-hidden rounded-lg shadow-sm shadow-neutral-500 xl:w-[800px]"
    >
      <div
        class="hidden w-1/2 items-center justify-center bg-cover md:flex"
        style="background-image: url('https://i.imgur.com/oEGKZw2.png')"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="h-[160px] fill-white"
        >
          <g>
            <path
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
            ></path>
          </g>
        </svg>
      </div>
      <div class="w-full bg-[#181818] p-10 md:w-1/2">
        <h2 class="mb-8 text-2xl font-bold text-gray-300">登入 LOG IN</h2>
        <button
          type="button"
          class="flex w-full items-center justify-center gap-2 rounded-full border bg-white px-5 py-2 text-gray-800 transition-all duration-300 hover:bg-gray-200"
        >
          <span
            ><svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              class="h-[16px]"
            >
              <g>
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </g></svg></span
          >使用 Google 登入
        </button>
        <div class="my-4 flex items-center">
          <div class="mr-2 h-[1px] w-full bg-gray-500"></div>
          <div class="text-gray-500">Or</div>
          <div class="ml-2 h-[1px] w-full bg-gray-500"></div>
        </div>
        <div
          v-show="errorMessage"
          class="mb-4 rounded border-l-4 border-orange-700 bg-[#321b1b] p-2"
        >
          <ri:error-warning-fill class="inline-block text-xl text-red-600" />
          <span class="ml-2 text-gray-300">{{ errorMessage }}</span>
        </div>
        <form @submit="onSubmit">
          <div class="mb-6">
            <label
              class="relative flex w-full rounded border p-2"
              :class="
                errors.email
                  ? 'border-red-700 text-red-700'
                  : 'border-gray-400 text-gray-400'
              "
              for="email"
            >
              <input
                id="email"
                v-model.trim="email"
                name="email"
                type="email"
                placeholder="信箱"
                class="peer order-2 w-full border-none bg-transparent placeholder-transparent focus:outline-none"
              />
              <span class="flex-order order-1 m-1 mb-0">
                <mdi:email-outline />
              </span>
              <span
                class="absolute left-3 bg-[#181818] font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:translate-y-0 peer-focus:text-xs"
                :class="email && '-top-2 translate-y-0 text-xs'"
                >信箱</span
              >
            </label>
            <p class="mt-2 text-sm text-red-800">{{ errors.email }}</p>
          </div>
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
          <button
            type="submit"
            class="w-full cursor-pointer rounded-full border border-gray-400 py-2 text-center text-blue-500 transition-all duration-300 hover:bg-blue-300/20"
          >
            登入
          </button>
        </form>
        <div class="mt-4 text-center text-sm">
          <span class="mr-1 text-xs text-gray-400">還沒有帳號嗎?</span>
          <router-link
            to="/register"
            class="text-blue-500 transition-all duration-300 hover:text-blue-300"
            >前往註冊</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
