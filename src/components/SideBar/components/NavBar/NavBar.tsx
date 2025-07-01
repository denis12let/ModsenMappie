import { FC, JSX, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button, NavLink } from '@ui';
import { Icons } from '@assets';
import { APP_ROUTES_PATH, mainLinks } from '@constants';
import { theme } from '@styles';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './../../../../firebase';

import lightTheme from '@assets/icons/light-theme.svg';
import darkTheme from '@assets/icons/dark-theme.svg';

import { NavBarInner, NavBarItem, NavBarLinks, NavBarWrapper } from './NavBar.style';
import { THEME, useTheme } from '@context';

export const NavBar: FC = () => {
  const { theme: themeContext, toggleTheme } = useTheme();

  const location = useLocation();
  const [element, setElement] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setElement(<Button onClick={userSignOut} children={<Icons.Login />}></Button>);
      } else {
        setElement(
          <NavLink to={APP_ROUTES_PATH.AUTH}>
            <Icons.User />
          </NavLink>
        );
      }
    });
    return () => unsubscribe();
  }, []);

  function userSignOut() {
    signOut(auth)
      .then(() => console.log('success'))
      .catch(() => console.log('не success'));
  }

  const links = mainLinks.map((item) => {
    return (
      <NavLink key={item.path} to={item.path}>
        {(() => {
          const Element = item.element;

          if (item.color) {
            const buttonFill = !location.pathname.includes(item.path) ? item.color : theme.colors.white;
            const iconFill = !location.pathname.includes(item.path) ? theme.colors.white : item.color;

            return (
              <NavBarItem color={buttonFill}>
                <Element color={iconFill} />
              </NavBarItem>
            );
          } else {
            return <Element />;
          }
        })()}
      </NavLink>
    );
  });
  return (
    <NavBarWrapper themeContext={themeContext}>
      <NavBarInner>
        <NavBarLinks>
          {links}
          <Button onClick={toggleTheme}>
            <img src={themeContext === THEME.LIGHT ? lightTheme : darkTheme} alt="тема" />
          </Button>
          {element}
        </NavBarLinks>
      </NavBarInner>
    </NavBarWrapper>
  );
};
