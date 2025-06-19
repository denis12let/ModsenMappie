import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps, routes } from '@router';

export const AppRouter = () => {
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
      <Route path="*" element={<>not found</>} />
    </Routes>
  );
};
