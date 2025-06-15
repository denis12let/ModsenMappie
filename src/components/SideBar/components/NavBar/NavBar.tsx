import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { NavLink } from '@ui';
import { Icons } from '@assets';
import { mainLinks } from '@constants';
import { theme } from '@styles';

import { NavBarInner, NavBarItem, NavBarLinks, NavBarWrapper } from './NavBar.style';

export const NavBar: FC = () => {
  const location = useLocation();

  const links = mainLinks.map((item) => {
    return (
      <NavLink key={item.path} to={item.path}>
        {(() => {
          const Element = item.element;

          if (item.color) {
            const buttonFill = location.pathname.includes(item.path) ? item.color : theme.colors.white;
            const iconFill = location.pathname.includes(item.path) ? theme.colors.white : item.color;

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
    <NavBarWrapper>
      <NavBarInner>
        <NavBarLinks>{links}</NavBarLinks>
        <NavLink to="/main">
          <Icons.Login />
        </NavLink>
      </NavBarInner>
    </NavBarWrapper>
  );
};

// const links = mainLinks.map((item) => {
//   const isActive = location.pathname.includes(item.path);
//   const Element = item.element;

//   if (item.color) {
//     const buttonFill = location.pathname.includes(item.path) ? item.color : theme.colors.white;
//     const iconFill = location.pathname.includes(item.path) ? theme.colors.white : item.color;
//     console.log(location.pathname, item.path, iconFill);
//   }

//   return (
//     <NavLink key={item.path} to={item.path}>
//       {item.color ? <Element color={isActive ? theme.colors.white : item.color} /> : <Element />}
//     </NavLink>
//   );
