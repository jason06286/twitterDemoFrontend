<template>
  <router-view />
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap');
body {
  background: #222222;
  color: #f8f8f8;
  font-family: 'Noto Sans TC', sans-serif;
}
.confirm-btn {
  @apply flex cursor-pointer items-center justify-center rounded-md border border-gray-400 bg-blue-900/50 px-1 py-1 text-sm font-bold text-gray-300 shadow-md shadow-blue-900 transition-all duration-200 hover:bg-blue-400/50 hover:shadow-black sm:px-3 sm:py-2 sm:text-base;
}
.cancel-btn {
  @apply flex cursor-pointer items-center justify-center rounded-md border border-gray-400 bg-red-900/50 px-1 py-1 text-sm font-bold text-gray-300 shadow-md shadow-red-900 transition-all duration-200 hover:bg-red-400/50 hover:shadow-black sm:px-3 sm:py-2 sm:text-base;
}
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
