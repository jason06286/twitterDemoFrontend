<script setup></script>
<template>
  <div class="container m-auto">
    <nav class="flex h-full border-2 text-xl text-red-500">
      <router-link to="/login" class="m-2 block border-2 border-white px-2 py-3"
        >Login</router-link
      >
      <router-link to="/" class="m-2 block border-2 border-white px-2 py-3"
        >Home</router-link
      >
      <router-link to="/about" class="m-2 block border-2 border-white px-2 py-3"
        >About</router-link
      >
      <router-link
        to="/register"
        class="m-2 block border-2 border-white px-2 py-3"
        >Register</router-link
      >
      <router-link to="/auth" class="m-2 block border-2 border-white px-2 py-3"
        >Auth</router-link
      >
      <router-link
        to="/auth/posts"
        class="m-2 block border-2 border-white px-2 py-3"
        >Posts</router-link
      >
    </nav>
  </div>
</template>
<style></style>
