import { signInWithEmailAndPassword } from 'firebase/auth';
import { FC, useState } from 'react';
import { auth } from './../../../../firebase';
import { Button, Input, Text } from '@ui';
import { AuthCard } from '@pages/Auth/Auth.style';

export const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function logIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error);
        setError('Аккаунт не найден');
      });
  }

  return (
    <AuthCard>
      <form onSubmit={logIn}>
        <Text variation="topic">Sign In</Text>
        <Input placeholder="email" text={email} setText={setEmail} type="email" />
        <Input placeholder="password" text={password} setText={setPassword} type="password" />

        <Button type="submit">Login</Button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </AuthCard>
  );
};

export default SignIn;
