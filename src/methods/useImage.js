import { apiUploadFile } from '@/api/api';

export default function useImage() {
  const errorMsg = ref('');

  const images = ref([]);

  const uploadFile = async (inputDom) => {
    const uploaderFile = inputDom.files[0];
    const formData = new FormData();
    formData.append('file-to-upload', uploaderFile);
    try {
      const res = await apiUploadFile(formData);
      return res;
    } catch (error) {
      errorMsg.value = error.response.data.message;
      console.error(error);
    }
  };
  const uploadImg = async (data) => {
    const file = new File([data], '123.png', { type: 'image/png' });
    const formData = new FormData();
    formData.append('file-to-upload', file);
    try {
      const res = await apiUploadFile(formData);
      return res;
    } catch (error) {
      errorMsg.value = error.response.data.message;
      console.log(error);
    }
  };

  const deleteImage = async (index) => {
    images.value.splice(index, 1);
  };

  return {
    images,
    uploadFile,
    uploadImg,
    deleteImage,
    errorMsg,
  };
}
