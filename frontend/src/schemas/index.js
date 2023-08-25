import * as yup from 'yup';

const passwordRules = '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{5,}$';
// Minimum eight characters, at least one letter and one number:

export const basicShemas = yup.object().shape({
  username: yup.string().required('thiếu username'),
  email: yup.string().email('Hãy nhập email hợp lệ').required('Thiếu email'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message: 'Mật khẩu cần có ít nhất 5 kí tự ',
    })
    .required('thiếu password'),
});
