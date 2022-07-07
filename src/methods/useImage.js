import { apiUploadFile } from '@/api/api';

export default function useImage() {
  const fileInput = ref(null);
  const errormsg = ref('');

  const images = ref([]);

  const uploadFile = async () => {
    const uploaderFile = fileInput.value.files[0];
    const formData = new FormData();
    formData.append('file-to-upload', uploaderFile);
    try {
      const res = await apiUploadFile(formData);
      console.log('res :>> ', res);
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
    fileInput,
    images,
    uploadFile,
    deleteImage,
    errormsg,
  };
}
