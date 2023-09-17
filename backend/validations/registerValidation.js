import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email('Email does not valid').required(),
  password: Yup.string().min(6).required(),
});
