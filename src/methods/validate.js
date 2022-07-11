import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('信箱不得為空，請重新輸入')
    .email('信箱格式錯誤，請重新輸入'),
  password: Yup.string()
    .min(8, '密碼格式錯誤，至少需要八碼')
    .required('密碼不得為空，請重新輸入'),
});
const registerSchema = Yup.object().shape({
  name: Yup.string().required('暱稱不得為空，請重新輸入'),
  email: Yup.string()
    .required('信箱不得為空，請重新輸入')
    .email('信箱格式錯誤，請重新輸入'),
  password: Yup.string()
    .min(8, '密碼格式錯誤，至少需要八碼')
    .required('密碼不得為空，請重新輸入'),
});

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, '密碼格式錯誤，至少需要八碼')
    .required('密碼不得為空，請重新輸入'),
  checked: Yup.string()
    .oneOf([Yup.ref('password'), null], '密碼不一致，請重新輸入')
    .required('確認密碼不得為空，請重新輸入'),
});
export { loginSchema, registerSchema, resetPasswordSchema };
