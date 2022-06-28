const loginSchema = {
  email(value) {
    if (!value) {
      return '信箱不得為空，請重新輸入';
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return '信箱格式錯誤，請重新輸入';
    }
    // All is good
    return true;
  },
  password(value) {
    if (!value) {
      return '密碼不得為空，請重新輸入';
    }
    if (value.length < 8) {
      return '密碼格式錯誤，請重新輸入';
    }
    return true;
  },
};
const registerSchema = {
  name(value) {
    if (!value) {
      return '暱稱不得為空，請重新輸入';
    }
    // All is good
    return true;
  },
  email(value) {
    if (!value) {
      return '信箱不得為空，請重新輸入';
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return '信箱格式錯誤，請重新輸入';
    }
    // All is good
    return true;
  },
  password(value) {
    if (!value) {
      return '密碼不得為空，請重新輸入';
    }
    if (value.length < 8) {
      return '密碼格式錯誤，請重新輸入';
    }
    return true;
  },
};
export { loginSchema, registerSchema };
