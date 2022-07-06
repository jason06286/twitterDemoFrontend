<script setup>
import VueEasyLightbox from 'vue-easy-lightbox';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const index = ref(0);
const visible = ref(false);

const showImg = (i) => {
  index.value = i;
  visible.value = true;
};
const handleHide = () => {
  visible.value = false;
};

defineExpose({ showImg });
</script>
<template>
  <vue-easy-lightbox
    :visible="visible"
    :imgs="props.images"
    :index="index"
    @hide="handleHide"
  ></vue-easy-lightbox>
</template>
<style></style>
