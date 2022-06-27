<script setup>
import useCounterStore from '@/stores/counter';

const str = ref('Welcome to Login page!!');

const store = useCounterStore();
console.log('store :>> ', store);
</script>
<template lang="">
  <div class="about">
    {{ store.name }}
    <button class="block border-2 py-3 px-2" @click="store.setName('Jason')">
      click me to change name
    </button>
    <div class="text-red-500 text-[100px]">
      {{ str }}
    </div>
  </div>
</template>
<style lang=""></style>
