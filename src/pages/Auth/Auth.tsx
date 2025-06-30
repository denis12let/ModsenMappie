import { FC, lazy, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignUp, SignIn } from './components';
import { Button } from '@ui';

import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './../../firebase';

import { AuthBottom, AuthStyled, ButtonWrapper } from './Auth.style';

export const AuthAsync = lazy(() => import('./Auth'));

const Auth: FC = () => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isLogIn, setIsLogIn] = useState(true);
  const navigation = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <AuthStyled>
      {authUser ? <>{navigation(-1)}</> : <>{isLogIn ? <SignIn /> : <SignUp />}</>}
      <AuthBottom>
        <p>Вы можете </p>
        <Button onClick={() => setIsLogIn(true)}>Войти</Button>
        <p> или </p>
        <Button onClick={() => setIsLogIn(false)}>Зарегистрироваться</Button>
      </AuthBottom>
      <ButtonWrapper>
        <Button onClick={() => navigation(-1)}>Вернуться</Button>
      </ButtonWrapper>
    </AuthStyled>
  );
};

export default Auth;
