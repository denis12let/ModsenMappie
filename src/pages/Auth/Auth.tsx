import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { FC, ReactNode, useEffect, useState } from 'react';
import { auth } from './../../firebase';
import { SignUp, SignIn } from './components';
import { AuthStyled } from './Auth.style';
import { Button, NavLink } from '@ui';
import { APP_ROUTES_PATH } from '@constants/app';
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
      {authUser ? <>{navigation(APP_ROUTES_PATH.SEARCH)}</> : <>{isLogIn ? <SignIn /> : <SignUp />}</>}
      <p>
        <span>Вы можете </span>
        <Button onClick={() => setIsLogIn(true)}>Войти</Button>
        <span> или </span>
        <Button onClick={() => setIsLogIn(false)}>Зарегистрироваться</Button>
      </p>
      <NavLink to={APP_ROUTES_PATH.SEARCH}>Вернуться</NavLink>
    </AuthStyled>
  );
};

export default Auth;
