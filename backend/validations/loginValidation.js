import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(6).required(),
});
