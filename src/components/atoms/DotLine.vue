<script setup>
const props = defineProps({
  error: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div
    class="relative mb-3 h-[2px] w-full before:absolute before:right-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full after:absolute after:left-0 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-full"
    :class="
      props.error
        ? 'bg-red-900 before:bg-red-900 after:bg-red-900'
        : 'bg-slate-400 before:bg-slate-400 after:bg-slate-400'
    "
  ></div>
</template>
<style></style>
