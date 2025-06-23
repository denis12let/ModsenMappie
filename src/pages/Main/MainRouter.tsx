// import { Suspense, useCallback } from 'react';
// import { Route, Routes } from 'react-router-dom';

// import { AppRoutesProps, mainRoutes } from '@router';
// import { useAppDispatch } from '@hooks';
// import { Search } from './components';

// export const MainRouter = () => {
//   const dispatch = useAppDispatch();

//   const renderWithWrapper = useCallback((router: AppRoutesProps) => {
//     const Element = router.element;

//     const element = (
//       <Suspense fallback={<></>}>
//         <Element />
//       </Suspense>
//     );

//     return <Route key={router.path} element={element} path={router.path}></Route>;
//   }, []);

//   return (
//     <Routes>
//       {Object.values(mainRoutes).map(renderWithWrapper)}
//       <Route path="*" element={<></>} />
//     </Routes>
//   );
// };
