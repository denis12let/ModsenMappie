import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FC } from 'react';
import { auth } from './../../../../firebase';
import { Button, Input, Text } from '@ui';
import { AuthCard } from '@pages/Auth/Auth.style';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const signUpSchema = yup.object({
  email: yup.string().email('Некорректный email').required('Email обязателен'),
  password: yup.string().min(6, 'Не менее 6 символов').required('Пароль обязателен'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Подтвердите пароль'),
});

type SignUpFormData = yup.InferType<typeof signUpSchema>;

export const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log(userCredential);
      reset();
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        if (error.message.includes('email-already-in-use')) {
          setValue('email', '', { shouldValidate: true });
          setValue('password', '', { shouldValidate: true });
          setValue('confirmPassword', '', { shouldValidate: true });
        }
      }
    }
  };

  const formValues = watch();

  return (
    <AuthCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text variation="topic">Sign Up</Text>
        <Input
          placeholder="Email"
          type="email"
          text={formValues.email || ''}
          setText={(value) => setValue('email', value, { shouldValidate: true })}
        />
        {errors.email?.message}
        <Input
          placeholder="Password"
          type="password"
          text={formValues.password || ''}
          setText={(value) => setValue('password', value, { shouldValidate: true })}
        />
        {errors.password?.message}

        <Input
          placeholder="Confirm Password"
          type="password"
          text={formValues.confirmPassword || ''}
          setText={(value) => setValue('confirmPassword', value, { shouldValidate: true })}
        />
        {errors.confirmPassword?.message}

        <Button type="submit">Create Account</Button>
      </form>
    </AuthCard>
  );
};

export default SignUp;
