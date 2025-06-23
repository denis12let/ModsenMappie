import { signInWithEmailAndPassword } from 'firebase/auth';
import { FC, useState } from 'react';
import { auth } from './../../../../firebase';
import { Button, Input, Text } from '@ui';
import { AuthCard } from '@pages/Auth/Auth.style';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const signInSchema = yup.object({
  email: yup.string().email('Некорректный email').required('Email обязателен'),
  password: yup.string().min(6, 'не менее 6 символов').required('Пароль обязателен'),
});

type SignInFormData = {
  email: string;
  password: string;
};

export const SignIn: FC = () => {
  const [error, setError] = useState('');

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log(userCredential);
      setError('');
      setValue('email', '');
      setValue('password', '');
    } catch (error) {
      setError('Аккаунт не найден');
    }
  };

  const emailValue = watch('email');
  const passwordValue = watch('password');
  console.log(123);
  return (
    <AuthCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text variation="topic">Sign In</Text>
        <Input placeholder="email" type="email" text={emailValue} setText={(value) => setValue('email', value)} />
        {errors.email?.message}
        <Input placeholder="password" type="password" text={passwordValue} setText={(value) => setValue('password', value)} />
        {errors.password?.message}
        <Button type="submit">Login</Button>
        {error && <p>{error}</p>}
      </form>
    </AuthCard>
  );
};

export default SignIn;
