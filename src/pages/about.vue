<script setup>
import useCounterStore from '@/stores/counter';

const str = ref('Welcome to about page!!');
const store = useCounterStore();
console.log('store :>> ', store);
</script>
<template>
  <div class="about">
    {{ store.name }}
    <button class="block border-2 py-3 px-2" @click="store.setName('Wendy')">
      click me to change name
    </button>
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
