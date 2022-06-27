<script setup>
const str = ref('Welcome to about page!!');

</script>
<template>
  <div class="about">
    <ri:settings-2-fill />
    <h1>{{ str }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
