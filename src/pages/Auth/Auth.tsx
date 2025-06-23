import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { FC, ReactNode, useEffect, useState } from 'react';
import { auth } from './../../firebase';
import { SignUp, SignIn } from './components';
import { AuthBottom, AuthStyled, ButtonWrapper } from './Auth.style';
import { Button } from '@ui';
import { useNavigate } from 'react-router-dom';

interface AuthProps {
  children: ReactNode;
}

const Auth: FC<AuthProps> = ({ children }) => {
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
  function userSignOut() {
    signOut(auth)
      .then(() => console.log('success'))
      .catch((e) => console.log(e));
  }
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
