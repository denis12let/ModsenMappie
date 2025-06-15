import { Suspense, useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps, routes } from '@router';
import { useAppDispatch } from '@hooks/useAppDispatch';
// import { NotFoundPage } from '@pages';
// import { Loader } from '@ui';
// import { useAppDispatch } from '@hooks';
// import { imagesActions } from '@store';

export const AppRouter = () => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const favorites = localStorage.getItem('favorites');
  //   if (favorites) {
  //     const storeFavorites = JSON.parse(favorites);
  //     dispatch(imagesActions.setFavorite(storeFavorites));
  //   }
  // }, []);

  const renderWithWrapper = useCallback((router: AppRoutesProps) => {
    const Element = router.element;

    const element = (
      <Suspense fallback={<></>}>
        <Element />
      </Suspense>
    );

    return <Route key={router.path} element={element} path={router.path}></Route>;
  }, []);

  return (
    <Routes>
      {Object.values(routes).map(renderWithWrapper)}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
