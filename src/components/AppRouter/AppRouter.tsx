import { Suspense, useCallback } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AppRoutesProps, routes } from '@router';
import { APP_ROUTES_PATH } from '@constants/app';

export const AppRouter = () => {
  const renderWithWrapper = (router: AppRoutesProps) => {
    const Element = router.element;
    const element = (
      <Suspense fallback={<></>}>
        <Element />
      </Suspense>
    );

    return (
      <Route key={router.path} element={element} path={router.path}>
        {router.children?.map((child) => {
          const ChildElement = child.element;
          return (
            <Route
              key={child.path}
              path={child.path}
              element={
                <Suspense fallback={<></>}>
                  <ChildElement />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    );
  };

  return (
    <Routes>
      {Object.values(routes).map(renderWithWrapper)}
      <Route path="/" element={<Navigate to={`${APP_ROUTES_PATH.MAIN}/${APP_ROUTES_PATH.SEARCH}`} replace />} />
      <Route path="*" element={<>not found</>} />
    </Routes>
  );
};
