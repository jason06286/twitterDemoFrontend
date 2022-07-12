<script setup>
import 'vue-cropper/dist/index.css';
import { VueCropper } from 'vue-cropper';
import useUserStore from '@/stores/user';

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

const route = useRoute();
const userStore = useUserStore();

const cropper = ref();
const option = ref({
  outputType: 'png', // 產生圖片的格式
  autoCrop: true,
  enlarge: 3,
});

const preview = async () => {
  cropper.value.getCropBlob(async (data) => {
    emit('confirmCropedCoverImage', data);
  });
};

watchEffect(() => {
  if (route.params.id === userStore.user.id) {
    window.addEventListener('resize', (e) => {
      if (e.target.screen.width >= 768) {
        option.value.enlarge = 3;
      } else {
        option.value.enlarge = 5;
      }
    });
  } else {
    window.removeEventListener('resize', () => {});
  }
});

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
    :enlarge="option.enlarge"
    center-box
  ></vueCropper>
</template>
<style></style>
