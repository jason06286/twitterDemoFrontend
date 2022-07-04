<script setup>
const route = useRoute();
console.log('route :>> ', route);
console.log('route.params :>> ', route.params.id);
</script>
<template>
  <div>{{ `Welcome to post  ${route.params.id}` }}</div>
</template>
<style></style>
