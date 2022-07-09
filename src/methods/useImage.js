import { apiUploadFile } from '@/api/api';

export default function useImage() {
  const errormsg = ref('');

  const images = ref([]);

  const uploadFile = async (inputDom) => {
    const uploaderFile = inputDom.files[0];
    const formData = new FormData();
    formData.append('file-to-upload', uploaderFile);
    try {
      const res = await apiUploadFile(formData);
      return res;
    } catch (error) {
      errormsg.value = error.response.data.message;
      console.log(error);
    }
  };

  const deleteImage = async (index) => {
    images.value.splice(index, 1);
  };

  return {
    images,
    uploadFile,
    deleteImage,
    errormsg,
  };
}
