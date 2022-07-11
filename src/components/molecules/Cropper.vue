<script setup>
import 'vue-cropper/dist/index.css';
import { VueCropper } from 'vue-cropper';

const props = defineProps({
  image: {
    type: String,
    default: '',
  },
  fixedNumber: {
    type: Array,
    default: () => [16, 9],
  },
});

const emit = defineEmits(['confirmCropedCoverImage']);
const cropper = ref();
const option = ref({
  outputType: 'png', // 產生圖片的格式
  autoCrop: true,
});

const preview = async () => {
  cropper.value.getCropBlob(async (data) => {
    emit('confirmCropedCoverImage', data);
  });
};

defineExpose({ preview });
</script>

<template>
  <vueCropper
    ref="cropper"
    :img="props.image"
    auto-crop
    :fixed="true"
    :fixed-number="props.fixedNumber"
    :output-size="1"
    :output-type="option.outputType"
    :fixed-box="false"
    :can-scale="true"
    center-box
  ></vueCropper>
</template>
<style></style>
