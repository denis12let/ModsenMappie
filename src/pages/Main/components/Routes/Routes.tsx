import { lazy } from 'react';
import { RoutesWrapper } from './Routes.style';
import { RoutesList } from './components/RoutesList/RoutesList';
import { useAppSelector } from '@hooks';

export const RoutesAsync = lazy(() => import('./Routes'));

const Routes = () => {
  const { routes } = useAppSelector((state) => state.places);

  return (
    <RoutesWrapper>
      <RoutesList routes={routes} />
    </RoutesWrapper>
  );
};

export default Routes;
