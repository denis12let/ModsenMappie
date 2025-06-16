import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FC, useState } from 'react';
import { auth } from './../../../../firebase';
import { Button, Input, Text } from '@ui';
import { AuthCard } from '@pages/Auth/Auth.style';

export const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [copyPassword, setCopyPassword] = useState('');
  const [error, setError] = useState('');
  function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Passwords didn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError('');
        setEmail('');
        setCopyPassword('');
        setPassword('');
      })
      .catch((error) => console.log(error));
  }
  return (
    <AuthCard>
      <form onSubmit={register}>
        <Text variation="topic">Sign Up</Text>
        <Input placeholder="email" text={email} setText={setEmail} type="email" />
        <Input placeholder="password" text={password} setText={setPassword} type="password" />
        <Input placeholder="password again" text={copyPassword} setText={setCopyPassword} type="password" />
        <Button>Create</Button>
        {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
      </form>
    </AuthCard>
  );
};
